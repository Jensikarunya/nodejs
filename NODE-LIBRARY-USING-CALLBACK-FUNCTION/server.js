const http = require('http')
const { mainRoute } = require('./lib/mainRoute')

const port = 8000

const server = http.createServer((req, res) => {
    mainRoute(req, res, (error, res, result) => {
        if (error) {
            res.writeHead(400, { 'Content-Type': 'text/plain' })
            res.write(error)
        } else {
            res.writeHead(200, { 'Content-Type': 'text/plain' })
            res.write(result)
        }
        res.end()
    });
});

server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})