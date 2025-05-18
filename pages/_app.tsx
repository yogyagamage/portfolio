// app.tsx
import { CssBaseline, ThemeProvider } from "@mui/material";
import Head from "next/head";
import React from "react";
import "../styles/globals.css";
import "../styles/DarkRevealLayer.css";
import { appTheme } from "../utils/theme/appTheme";
import DarkRevealLayer from "./darkRevealLayer";
import { TrueDarkModeProvider, useTrueDarkMode } from "../utils/context/TrueDarkModeContext";

function InnerApp({ Component, pageProps }) {
    const { trueDarkMode } = useTrueDarkMode();

    return (
        <ThemeProvider theme={appTheme}>
            <DarkRevealLayer enabled={trueDarkMode} />
            <CssBaseline enableColorScheme />
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

function MyApp(props) {
    return (
        <TrueDarkModeProvider>
            <Head>
                <title>Yogya Gamage</title>
                <link rel="shortcut icon" href="/favicon.png" />
            </Head>
            <InnerApp {...props} />
        </TrueDarkModeProvider>
    );
}

export default MyApp;
