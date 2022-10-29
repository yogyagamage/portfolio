import { Grid } from '@mui/material'
import React from 'react'

export default function MainGrid(prop) {

    const { children } = prop;

    return (
        <div>
            <Grid container spacing={2} sx={{
                '--Grid-borderWidth': '1px',
                borderTop: 'var(--Grid-borderWidth) solid',
                borderLeft: 'var(--Grid-borderWidth) solid',
                borderColor: 'divider',
                '& > div': {
                    borderRight: 'var(--Grid-borderWidth) solid',
                    borderBottom: 'var(--Grid-borderWidth) solid',
                    borderColor: 'divider',
                },
                height: "100vh"
            }}>
                <Grid item xs={0} sm={1} md={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
                    <p>xs=8</p>
                </Grid>
                <Grid item xs={12} sm={10} md={8}>
                    {children}
                </Grid>
                <Grid item xs={0} sm={1} md={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
                    <p>xs=4</p>
                </Grid>
            </Grid>
        </div>
    )
}
