import BigNumber from 'bignumber.js'

export const number = {
    formatNumber,
    shortNumber
}

export function formatNumber(val, minDigit = 0, maxDigit = 2) {
    if (!Number(val) && val !== 0) {
        return val;
    }
    return Number(val).toLocaleString(undefined, {
        minimumFractionDigits: minDigit,
        maximumFractionDigits: maxDigit
    })
}

export function shortNumber(input, digits = 2) {
    if (input) {
        if (isNaN(input)) return input
    
        if (digits == null || Math.abs(input) < 1000000) {
            digits = 0
        }
    
        let units = ['M'], decimal
    
        for (let i = units.length - 1; i >= 0; i--) {
            decimal = Math.pow(1000000, i + 1)
    
            if (input <= -decimal || input >= decimal) {
                return (
                    Number(input / decimal).toLocaleString(undefined, {
                    minimumFractionDigits: digits,
                    maximumFractionDigits: digits
                    }) +
                    ' ' +
                    units[i]
                )
            }
        }
    
        return Number(input).toLocaleString(undefined, {
            minimumFractionDigits: digits,
            maximumFractionDigits: digits
        })
    }
    return input
}