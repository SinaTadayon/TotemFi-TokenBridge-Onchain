// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.11;

import "./PeggedTotemTokenStorageStructure.sol";

contract PeggedTotemTokenImpl is PeggedTotemTokenStorageStructure {
    using BasisPoints for uint256;

    function setLocker(address _locker) external onlyRole(ADMIN_ROLE) {
        require(_locker != address(0), "_locker cannot be address(0)");
        locker = ILocker(_locker);
        emit SetLocker(_locker);
    }

    function setTaxRate(uint256 newTaxRate) public onlyRole(ADMIN_ROLE) {
        require(newTaxRate < 10000, "Tax connot be over 100% (10000 BP)");
        taxRate = newTaxRate;
    }

    function setTaxExemptStatus(address account, bool status)
        public
        onlyRole(ADMIN_ROLE)
    {
        require(account != address(0));
        taxExempt[account] = status;
    }

    function setTaxationWallet(address newTaxationWallet)
        public
        onlyRole(ADMIN_ROLE)
    {
        require(newTaxationWallet != address(0));
        taxationWallet = newTaxationWallet;
    }

    function transfer(address recipient, uint256 amount)
        public
        override
        returns (bool)
    {
        require(_msgSender() != recipient, "ERC20: cannot self transfer");
        !taxExempt[_msgSender()]
            ? _transferWithTax(_msgSender(), recipient, amount)
            : _transfer(_msgSender(), recipient, amount);
        return true;
    }

    function transferFrom(
        address sender,
        address recipient,
        uint256 amount
    ) public override returns (bool) {
        !taxExempt[sender]
            ? _transferWithTax(sender, recipient, amount)
            : _transfer(sender, recipient, amount);

        require(
            allowance(sender, _msgSender()) - amount >= 0,
            "ERC20: transfer amount exceeds allowance"
        );

        unchecked {
            _approve(
                sender,
                _msgSender(),
                allowance(sender, _msgSender()) - amount
            );
        }

        return true;
    }

    function mintTo(address recipient, uint256 amount)
        public
        onlyRole(SWAPPER_ROLE)
        returns (bool)
    {
        _mint(recipient, amount);
        return true;
    }

    function burnFrom(address account, uint256 amount)
        public
        onlyRole(SWAPPER_ROLE)
        returns (bool)
    {
        _burn(account, amount);

        require(
            allowance(account, _msgSender()) - amount >= 0,
            "ERC20: burn amount exceeds allowance"
        );

        unchecked {
            _approve(
                account,
                _msgSender(),
                allowance(account, _msgSender()) - amount
            );
        }

        return true;
    }

    function _transfer(
        address sender,
        address recipient,
        uint256 amount
    ) internal override {
        if (address(locker) != address(0)) {
            locker.lockOrGetPenalty(sender, recipient);
        }
        super._transfer(sender, recipient, amount);
    }

    function _transferWithTax(
        address sender,
        address recipient,
        uint256 amount
    ) internal {
        require(sender != address(0), "ERC20: transfer from the zero address");
        require(recipient != address(0), "ERC20: transfer to the zero address");
        require(sender != recipient, "Cannot self transfer");

        uint256 tax = amount.mulBP(taxRate);

        require(amount >= tax, "ERC20: tax exceeds amount");

        uint256 tokensToTransfer;
        unchecked {
            tokensToTransfer = amount - tax;
        }

        _transfer(sender, taxationWallet, tax);
        _transfer(sender, recipient, tokensToTransfer);
    }
}
