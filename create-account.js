function createAccount(pin, amount = 0) {
    return {

        checkPin(enteredPin) {
            return (enteredPin === pin ? true : false)
        },

        checkBalance(enteredPin) {
            if (!this.checkPin(enteredPin)) return 'Invalid PIN.'
            return `$${amount}`
        },

        deposit(enteredPin, depositAmount) {
            if (!this.checkPin(enteredPin)) return 'Invalid PIN.'
            amount += depositAmount;
            return `Succesfully deposited $${depositAmount}. Current balance: $${amount}.`
        },

        withdraw(enteredPin, withdrawlAmount) {
            if (!this.checkPin(enteredPin)) return 'Invalid PIN.'
            if (withdrawlAmount > amount) return 'Withdrawal amount exceeds account balance. Transaction cancelled.'
            amount -= withdrawlAmount;
            return `Succesfully withdrew $${withdrawlAmount}. Current balance: $${amount}.`
        },

        changePin(oldPin, newPin) {
            if (!this.checkPin(oldPin)) return 'Invalid PIN.'
            pin = newPin
            return "PIN successfully changed!"
        }
    }
}

module.exports = { createAccount };
