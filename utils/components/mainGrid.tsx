import { Grid } from '@mui/material'
import React from 'react'

export default function MainGrid(prop) {

    const { children } = prop;

    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={1} md={2}>
                    <p>xs=8</p>
                </Grid>
                <Grid item xs={10} md={8}>
                    {children}
                </Grid>
                <Grid item xs={1} md={2}>
                    <p>xs=4</p>
                </Grid>
            </Grid>
        </div>
    )
}
