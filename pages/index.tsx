import React from "react";
import MainGrid from "../utils/components/mainGrid";
import NavBar from "../utils/components/navBar";

export default function Home() {
    return (
        <>
            <NavBar />
            <MainGrid>
                <p style={ { backgroundColor: "red" } }>xs=4</p>
            </MainGrid>
        </>

    );
}
