import { Grid } from "@mui/material";
import React from "react";

export default function MainGrid(prop) {

    const { children } = prop;

    return (
        <div>
            <Grid 
                container 
                sx={ {
                    height: "100%"
                } }
            >
                <Grid item xs={ 0 } sm={ 1 } md={ 2 } sx={ { display: { sm: "block" , xs: "none" } } }>
                </Grid>
                <Grid 
                    item 
                    xs={ 12 } 
                    sm={ 10 } 
                    md={ 8 } 
                    sx={ {
                        borderLeft: "var(--Grid-borderWidth) solid",
                        borderRight: "var(--Grid-borderWidth) solid",
                        minHeight: "66vh",
                        padding: "20px 40px"
                    } }
                >
                    { children }
                </Grid>
                <Grid item xs={ 0 } sm={ 1 } md={ 2 } sx={ { display: { sm: "block", xs: "none" } } }>
                </Grid>
            </Grid>
        </div>
    );
}
