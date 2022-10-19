import { Grid } from '@mui/material'
import React from 'react'

export default function Home() {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <p>xs=8</p>
        </Grid>
        <Grid item xs={8}>
          <p style={{ backgroundColor: "red" }}>xs=4</p>
        </Grid>
        <Grid item xs={2}>
          <p>xs=4</p>
        </Grid>
      </Grid>
    </div>
  )
}
