const textTransform = require('./lib/textTransform')

textTransform.transformText("Credo systems!", "ul", (error, result) => {
    if (error) {
        console.error("error:", error.message)
    } else {
        console.log("Transformed Text (Uppercase):", result)
    }
})

textTransform.transformText("CREDO SYSTEm!", "lc", (error, result) => {
    if (error) {
        console.error("error:", error.message)
    } else {
        console.log("Transformed Text (Lowercase):", result)
    }
})

textTransform.transformText("", "ul", (error, result) => {
    if (error) {
        console.error("error:", error.message)
    }
})