const express = require('express')
const path = require('path')
const next = require('next')
const nextI18NextMiddleware = require('next-i18next/middleware').default
const serveStatic = require('serve-static');

const nextI18next = require('./i18n')

const port = process.env.PORT || 3000
const app = next({ dev: process.env.NODE_ENV !== 'production' })
const handle = app.getRequestHandler();

(async () => {
    await app.prepare()
    const server = express()

    server.use(serveStatic(path.resolve('./static')));
    server.use(nextI18NextMiddleware(nextI18next))

    server.get('*', (req, res) => handle(req, res))

    await server.listen(port)
    console.log(`> Ready on http://localhost:${port}`) // eslint-disable-line no-console
})()