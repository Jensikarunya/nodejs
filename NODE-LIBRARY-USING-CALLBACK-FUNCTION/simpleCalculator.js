const {add,subtract,multiply,division} = require('./lib/mathfunc')

add(15, 3, (error, result) => {
    if (error) {
        console.log("Error:", error.message)
    } else {
        console.log("Addition Result:", result)
    }
})

subtract(15, 3, (error, result) => {
    if (error) {
        console.log("Error:", error.message)
    } else {
        console.log("Subtraction Result:", result)
    }
})

multiply(15, 3, (error, result) => {
    if (error) {
        console.log("Error:", error.message)
    } else {
        console.log("Multiplication Result:", result)
    }
})

division(15, 0, (error, result) => {
    if (error) {
        console.log("Error:", error.message)
    } else {
        console.log("Division Result:", result)
    }
})