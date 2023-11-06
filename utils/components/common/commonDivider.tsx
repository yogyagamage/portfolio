import { Divider } from "@mui/material";
import React from "react";

export default function CommonDivider() {
    return (
        <>
            <br />
            <Divider 
                style={ {
                    left: "0px",
                    position: "absolute", 
                    width: "100vw" 
                } } 
            />
            <br />
        </>
    );
}
