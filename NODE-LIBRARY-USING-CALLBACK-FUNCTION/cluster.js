const cluster = require('cluster')
const osUtils = require('./os')

exports.setupCluster = (startServer) => {
    if (cluster.isMaster) {
        const cpuCount = osUtils.getCpuCount()
        console.log(`Master process is running. starting ${cpuCount} workers...`)

        for (let i = 0; i < cpuCount; i++) {
            cluster.fork()
        }

        cluster.on('exit', (worker, code, signal) => {
            console.log(`Worker ${worker.process.pid} died. Restarting...`)
            cluster.fork()
        });
    } else {
        startServer()
    }
}