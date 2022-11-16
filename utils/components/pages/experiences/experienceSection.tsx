import { Divider } from "@mui/material";
import DescriptionList from "../../common/descriptionList";
import ExperienceOverview from "./experienceOverview";
import PropTypes from "prop-types";
import CommonDivider from "../../common/commonDivider";

function Experiences({ experiences }) {

    return (
        <>
            {
                experiences.map((experience) => <SingleExperience experience={experience} />)
            }
        </>

    );

}

Experiences.propTypes = {
    experiences: PropTypes.arrayOf(PropTypes.object)
}

function SingleExperience({ experience }) {

    return (
        <>
            <br />
            <ExperienceOverview
               title={experience.title} />
            <br />
            <DescriptionList list={experience.content} />

            <CommonDivider />
        </>
    );
}

export default Experiences;
