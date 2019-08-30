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
                    <title>nextDao</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <link rel="shortcut icon" href="/static/favicon.ico" type="image/x-icon" />
                    <link rel="icon" href="/static/favicon.ico" type="image/x-icon" />
                    <link href="https://fonts.googleapis.com/css?family=Open+Sans|Saira+Condensed&display=swap" rel="stylesheet" />
                </Head>
                <Component {...pageProps} />
            </>
        )
    }
}

const GACode = "UA-144273829-1";

export default withGA(GACode, Router)(appWithTranslation(MyApp))