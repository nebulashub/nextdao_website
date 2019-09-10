const express = require('express')
const next = require('next')
const { parse } = require('url')
const nextI18NextMiddleware = require('next-i18next/middleware').default

const nextI18next = require('./i18n')

const port = process.env.PORT || 3000
const app = next({ dev: process.env.NODE_ENV === 'dev' })
const handle = app.getRequestHandler();

(async () => {
    await app.prepare()
    const server = express();

    server.use(nextI18NextMiddleware(nextI18next));

    server.get('*', (req, res) => {
        const parsedUrl = parse(req.url, true);
        const { pathname, query } = parsedUrl;

        if (pathname === '/flash-nax') {
            app.render(req, res, '/bidding', query)
        } else {
            handle(req, res, parsedUrl)
        }

    });

    await server.listen(port)
    console.log(`> Ready on http://localhost:${port}`) // eslint-disable-line no-console
})()