import DescriptionList from "../utils/components/common/descriptionList";
import MainGrid from "../utils/components/common/mainGrid";
import NavBar from "../utils/components/common/navBar";
import Title from "../utils/components/common/title";
import { Grid, List, ListItem, ListItemText, Typography } from "@mui/material";
import ExperienceSection from "../utils/components/pages/experiences/experienceSection";


export default function Experiences() {
    return (
        <>
            <NavBar />
            <MainGrid>
                <Title title="experiences" />
                <ExperienceSection />
            </MainGrid>
        </>

    );
}
