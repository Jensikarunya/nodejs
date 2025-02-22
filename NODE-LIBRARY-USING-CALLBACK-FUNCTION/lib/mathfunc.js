exports.add = (a, b, callback) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
        callback(new Error("Both arguments must be numbers"))
    } else {
        callback(null, a + b)
    }
}

exports.subtract = (a, b, callback) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
        callback(new Error("Both arguments must be numbers"))
    } else {
        callback(null, a - b)
    }
}

exports.multiply = (a, b, callback) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
        callback(new Error("Both arguments must be numbers"))
    } else {
        callback(null, a * b)
    }
}

exports.division = (a, b, callback) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
        callback(new Error("Both arguments must be numbers"))
    } else if (b === 0) {
        callback(new Error("Division by zero is not allowed"))
    } else {
        callback(null, a / b)
    }
}