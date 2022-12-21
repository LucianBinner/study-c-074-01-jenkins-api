const { pathEnv } = require('../config/env')()
require('dotenv').config({ path: pathEnv })

const express = require('express');
const cors = require('cors');

const routes = require('../config/routes');
const { port } = require('../config/env')()

const app = express();

async function main() {
    app.use(cors())
    app.use(express.json())
    app.use('/', routes)

    app.listen(port, () => {
        console.log(`Server is running on port: ${port}`)
    })
}

main()