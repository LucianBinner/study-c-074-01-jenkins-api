const { resolve } = require('path')

function env() {
    let nodeEnv = process.env.NODE_ENV
    let port = String(process.env.PORT)

    let configEnv = {
        DEV: '.env.dev',
        PROD: '.env.prod',
    }
    const pathEnv = resolve(__dirname, 'env', `${nodeEnv ? configEnv[nodeEnv] : ".env"}`)

    return {
        pathEnv,
        port,
    }
}

module.exports = env