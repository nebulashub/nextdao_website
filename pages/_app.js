import React from 'react'
import App from 'next/app'
import { appWithTranslation } from '../i18n'
import Head from 'next/head'
import Router from "next/router";
import withGA from "next-ga";
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

const GACode = "UA-144273829-1";

export default appWithTranslation(withGA(GACode, Router)(MyApp))