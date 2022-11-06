import { Grid, List, ListItem, ListItemText } from "@mui/material";
import MainGrid from "../../utils/components/common/mainGrid";
import NavBar from "../../utils/components/common/navBar";
import Title from "../../utils/components/common/title";

export async function getServerSideProps(context) {

    const routerQuery = context.query.id;

    return {
        props: { routerQuery }
    };

}

export default function SingleProject() {
    return (
        <>
            <NavBar />
            <MainGrid>
                <Title title="projects" />
                <List dense={true}>
                    <OverallDetailsItem />
                    <OverallDetailsItem />
                    <OverallDetailsItem />
                </List>
            </MainGrid>
        </>

    );
}

function OverallDetailsItem() {
    return (
        <ListItem>
            <ListItemText primary={
                <Grid container justifyContent="flex-start" spacing={{ xs: 2, md: 1 }} >
                    <Grid item xs={3} sm={1} md={1.5} lg={1}>
                        Duration
                    </Grid>
                    <Grid item xs={8}>
                        <b>04/2022 - Present</b>
                    </Grid>
                </Grid>
            } />
        </ListItem>
    )
}

