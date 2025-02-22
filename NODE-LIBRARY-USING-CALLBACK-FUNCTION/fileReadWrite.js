const filesystem = require('./lib/filesys')

filesystem.createFile('samplefile.txt', 'learning node js!', (error, message) => {
    if (error) {
        console.log("Error:", error.message)
    } else {
        console.log(message)

        filesystem.readFile('samplefile.txt', (error, data) => {
            if (error) {
                console.log("Error:", error.message)
            } else {
                console.log("File Content:", data)

        filesystem.appendFile('samplefile.txt', '\nto become a MERN stack developer', (error, message) => {
            if (error) {
                console.log("Error:", error.message)
            } else {
                console.log(message)

                        
        filesystem.readFile('samplefile.txt', (error, data) => {
            if (error) {
                console.log("Error:", error.message)
                } else {
                    console.log("Updated File Content:", data)
                            }
                        })
                    }
                })
            }
        })
    }
})