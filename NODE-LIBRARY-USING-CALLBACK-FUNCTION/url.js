const url = require('url')

exports.parseUrl = (reqUrl) => {
    const parsedUrl = url.parse(reqUrl, true)
    return {
        pathname: parsedUrl.pathname,
        protocol: parsedUrl.protocol,
        host: parsedUrl.host,
        search: parsedUrl.search,
        query: parsedUrl.query
    }
}