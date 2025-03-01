const url = require('url')
const { transformText } = require('./transformText')

exports.mainRoute = function handleRequest(req, res, callback) {
    const parsedUrl = url.parse(req.url, true)

    if (req.method === 'GET') {
        if (parsedUrl.pathname === '/') {
            callback(null, res, 'Welcome to the Home Page')
        } else if (parsedUrl.pathname === '/about') {
            callback(null, res, 'About Page')
        } else {
            callback('Pathname not found', res)
        }
    } else if (req.method === 'POST') {
        if (parsedUrl.pathname === '/transform') {
            const text = parsedUrl.query.text
            const type = parsedUrl.query.type

            transformText(text, type, (error, result) => {
                if (error) {
                    callback(error, res)
                } else {
                    callback(null, res, result)
                }
            });
        } 
    } else {
        callback('Method not supported', res)
    }
}
