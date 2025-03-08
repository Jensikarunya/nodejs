exports.transformText = (text, type, callback) => {
    if (!text || typeof text !== 'string' || text.trim() === '') {
        return callback(new Error('Invalid input: Text must be a non-empty string.'))
    }

    if (!type || (type !== 'ul' && type !== 'lc')) {
        return callback(new Error('Invalid type: Use "ul" for uppercase or "lc" for lowercase.'))
    }

    const result = type === 'ul' ? text.toUpperCase() : text.toLowerCase()
    callback(null, result)
}