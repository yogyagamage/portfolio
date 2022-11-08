import { Divider } from "@mui/material";
import DescriptionList from "../../common/descriptionList";
import ExperienceOverview from "./experienceOverview";
import PropTypes from "prop-types";

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
                place={experience.place}
                position={experience.position}
                duration={experience.duration} />
            <br />
            <DescriptionList list={experience.content} />
            <br />
            <Divider />
        </>
    );
}

export default Experiences;
