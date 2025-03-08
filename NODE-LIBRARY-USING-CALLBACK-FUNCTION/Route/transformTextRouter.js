const { transformText } = require("../lib/texttransformlib")

exports.handleTransformTextRoutes = (queryParams) => {
    return new Promise((resolve, reject) => {
        const text = queryParams?.text
        const type = queryParams?.type

        if(!text || !type) {
            return reject({
                content: "input text and type are required",
                contentType: "text/html",
                statusCode: 400
            })
        }

        transformText(text, type, (error, result) => {
            if (error) {
                reject({
                    content: "Error in text transform",
                    contentType: "text/html",
                    statusCode: 500
                })
            } else {
                resolve({
                    content: result,
                    contentType: "text/plain",
                    statusCode: 200
                })
            }
        })
    })
   
};