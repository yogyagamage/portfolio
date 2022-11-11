import { Grid, List, ListItem, ListItemText, Typography } from "@mui/material";

export default function OverallDetails({ overview }) {
    const x = [];
    return (
        <List dense={true} >
            {
                overview.map((item)=><OverallDetailsItem title={item.title} body={item.body}/>)
            }
        </List>
    );
}

function OverallDetailsItem({ title, body }) {
    return (
        <ListItem disableGutters disablePadding>
            <ListItemText primary={
                <Grid container justifyContent="flex-start" spacing={{ xs: 2, md: 1 }} >
                    <Grid item xs={3} sm={1} md={1.5} lg={1}>
                        <Typography variant="body2" color="text.secondary">
                            {title}
                        </Typography>
                    </Grid>
                    <Grid item xs={8}>
                        <Typography variant="body2" color="text.primary">
                            <b>{body}</b>
                        </Typography>
                    </Grid>
                </Grid>
            } />
        </ListItem>
    )
}
