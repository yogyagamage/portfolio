import PropTypes from "prop-types";
import CommonDivider from "../../common/commonDivider";
import DescriptionList from "../../common/descriptionList";
import ExperienceOverview from "./experienceOverview";
import Typography from "@mui/material/Typography";

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
            <Typography variant="h4" color="text.primary">
                { experience.title }
            </Typography>
            <br />
            {
                experience.content.map((singleExperience) => (
                    <>
                        <ExperienceOverview title={ singleExperience.title } />
                        <br />
                        <DescriptionList list={ singleExperience.content } />
                        <br />
                    </>
                ))
            }
            <CommonDivider />
        </>
    );
}

export default Experiences;
