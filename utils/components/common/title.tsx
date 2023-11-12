import { Grid, Stack, Typography } from "@mui/material";

export default function Title(prop) {

    const { title } = prop;

    return (
        <div style={ { height: "35vh", borderBottom: "1px solid #1f1f1f"}}>
            <Stack
                direction="column"
                justifyContent="center"
                sx={ {
                    height: "100%",
                    textTransform: "capitalize"
                } }>

                <Grid container sx={ { height: "100%" } }>
                    <Grid item xs={ 0 } sm={ 1 } md={ 2 } sx={ { display: { xs: "none", sm: "block" } } }>
                    </Grid>
                    <Grid item xs={ 12 } sm={ 10 } md={ 8 } sx={ {
                        paddingLeft: "40px",
                        paddingRight: "40px",
                    } }>
                        <Stack
                            direction="column"
                            justifyContent="center"
                            sx={ {
                                height: "100%",
                                textTransform: "capitalize"
                            } }>

                            <Typography variant="h4" color="primary">
                                { title }
                            </Typography>
                        </Stack>

                    </Grid>
                    <Grid item xs={ 0 } sm={ 1 } md={ 2 } sx={ { display: { xs: "none", sm: "block" } } }>
                    </Grid>
                </Grid>
            </Stack>
        </div>
    );
}
