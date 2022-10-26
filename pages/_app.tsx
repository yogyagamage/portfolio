import Head from "next/head";
import React from "react";
import "../styles/globals.css";

function MyApp(prop) {

    const { Component, pageProps } = prop;

    return (
        <>
            <Head>
                <title>Achintha Isuru</title>
                <link rel="shortcut icon" href="/favicon.png" />
            </Head>
            <Component { ...pageProps } />
        </>

    );
}

export default MyApp;
