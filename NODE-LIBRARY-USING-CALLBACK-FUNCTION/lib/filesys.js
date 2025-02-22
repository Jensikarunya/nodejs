const filesys = require('fs')

exports.createFile = function (filePath, content, callback) {
    filesys.writeFile(filePath, content, (err) => {
        if (err) {
            callback(new Error("Failed to create file: " + err.message))
        } else {
            callback(null, "File created successfully")
        }
    })
}

exports.readFile = function (filePath, callback) {
    filesys.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            callback(new Error("Failed to read file: " + err.message))
        } else {
            callback(null, data)
        }
    })
}

exports.appendFile = function (filePath, content, callback) {
    filesys.appendFile(filePath, content, (err) => {
        if (err) {
            callback(new Error("Failed to append to file: " + err.message))
        } else {
            callback(null, "File appended successfully")
        }
    })
}

exports.deleteFile = function (filePath, callback) {
    filesys.unlink(filePath, (err) => {
        if (err) {
            callback(new Error("Failed to delete file: " + err.message))
        } else {
            callback(null, "File deleted successfully")
        }
    })
}