import React from 'react'
import App, { Container } from 'next/app'
import { appWithTranslation } from '../i18n'
import Head from 'next/head'
import 'purecss/build/pure.css'
import 'purecss/build/grids-responsive-min.css'
import 'animate.css/animate.min.css'

class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props
        return (
            <>
                <Head>
                    <title>NextDao</title>
                    <link href="https://fonts.googleapis.com/css?family=Open+Sans|Saira+Condensed&display=swap" rel="stylesheet" />
                </Head>
                <Component {...pageProps} />
            </>
        )
    }
}

export default appWithTranslation(MyApp)