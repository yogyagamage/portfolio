import PropTypes from "prop-types";
import CommonDivider from "../../common/commonDivider";
import DescriptionList from "../../common/descriptionList";
import ExperienceOverview from "./experienceOverview";

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
            <ExperienceOverview
               title={experience.title} />
            <br />
            <DescriptionList list={experience.content} />

            <CommonDivider />
        </>
    );
}

export default Experiences;
