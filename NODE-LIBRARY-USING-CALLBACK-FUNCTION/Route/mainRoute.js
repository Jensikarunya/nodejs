const url = require('url')
const { handleTransformTextRoutes } = require('./transformTextRouter')

exports.mainRoute = (req) => {
    return new Promise((resolve, reject) => {
        const parsedUrl = url.parse(req.url, true)
        const queryParams = parsedUrl.query

        let routeHandler

        if (parsedUrl.pathname === '/transform') {
            routeHandler = handleTransformTextRoutes(queryParams)
        } else {
            return reject ({
                content: "<h1> Page Not found </h1>",
                contentType: "text/html",
                statusCode: 404
            })
        }

        routeHandler
            .then ((result) => resolve(result))
            .catch((error) => reject(error))
    })
}
