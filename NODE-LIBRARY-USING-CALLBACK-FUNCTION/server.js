const http = require('http')
const clusterUtils = require('./cluster')
const { transformText } = require('./lib/transformText')
const url = require('url')

const port = 3000
const startServer = () => {
    const server = http.createServer((req, res) => {
        
        const parsedUrl = url.parse(req.url, true)
        
        if (parsedUrl.pathname == '/transform') {
            const text = parsedUrl.query.text
            const type = parsedUrl.query.type

            transformText(text, type, function(error, result) {
                if(error) {
                    res.write(error)
                } else {
                    res.write(result)
                }
            })
        } else {
            res.write("Pathname not found");
        }

        res.end()
    });

    server.listen(port, (error, res) => {
        console.log(`Server started on the port number ${port}`)
    })
}




clusterUtils.setupCluster(startServer)