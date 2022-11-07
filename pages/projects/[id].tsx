import { List, ListItem, ListItemText, Stack, Typography } from "@mui/material";
import DescriptionList from "../../utils/components/common/descriptionList";
import MainGrid from "../../utils/components/common/mainGrid";
import NavBar from "../../utils/components/common/navBar";
import Title from "../../utils/components/common/title";
import OverallDetails from "../../utils/components/pages/projects-id/overallDetails";

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
            <Title title="projects" />
            <MainGrid>
                <OverallDetails />
                <br />
                <DescriptionList />

            </MainGrid>
        </>
    );
}
