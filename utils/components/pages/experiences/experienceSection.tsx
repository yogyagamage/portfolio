import DescriptionList from "../../common/descriptionList";
import MainGrid from "../../common/mainGrid";
import NavBar from "../../common/navBar";
import Title from "../../common/title";
import { Grid, List, ListItem, ListItemText, Divider } from "@mui/material";
import ExperienceOverview from "./experienceOverview";


export default function Experiences() {
    return (
        <>
            <SingleExperience />
            <SingleExperience />
        </>

    );

}
function SingleExperience() {

    return (
        <>
            <br />
            <ExperienceOverview />
            <br />
            <DescriptionList />
            <br />
            <Divider />
        </>
    );
}

