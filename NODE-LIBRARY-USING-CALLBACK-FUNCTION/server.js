const http = require('http')
const { mainRoute } = require('./Route/mainRoute')

const port = 8000

const server = http.createServer(async (req, res) => {
    try{
        const result = await mainRoute(req)
        res.writeHead(result.statusCode, { 'Content-Type': result.contentType })
        res.write(result.content)
    } catch (error) {
        res.writeHead(error.statusCode || 500, { 'Content-Type': error.contentType || "text/html" })
        res.write(error.content || "Internal Server Error")
    } finally {
        res.end()
    }
})

server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})