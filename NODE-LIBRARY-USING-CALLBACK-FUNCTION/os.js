const os = require('os')

exports.getCpuCount = () => os.cpus().length

exports.getOSDetails = () => ({
    platform: os.platform(),
    architecture: os.arch(),
    freeMemory: os.freemem(),
    totalMemory: os.totalmem()
})