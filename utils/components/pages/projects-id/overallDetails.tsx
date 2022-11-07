import { Grid, List, ListItem, ListItemText, Typography } from "@mui/material";

export default function OverallDetails() {

    return (
        <List dense={true} >
            <OverallDetailsItem />
            <OverallDetailsItem />
            <OverallDetailsItem />
        </List>
    );
}

function OverallDetailsItem() {
    return (
        <ListItem disableGutters disablePadding>
            <ListItemText primary={
                <Grid container justifyContent="flex-start" spacing={{ xs: 2, md: 1 }} >
                    <Grid item xs={3} sm={1} md={1.5} lg={1}>
                        <Typography variant="body2" color="text.secondary">
                            Duration
                        </Typography>
                    </Grid>
                    <Grid item xs={8}>
                        <Typography variant="body2" color="text.primary">
                            <b>04/2022 - Present</b>
                        </Typography>
                    </Grid>
                </Grid>
            } />
        </ListItem>
    )
}
