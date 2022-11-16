import { Divider, Typography } from "@mui/material";
import DescriptionList from "../../common/descriptionList";
import ExperienceOverview from "../experiences/experienceOverview";
import PropTypes from "prop-types";
import ImageListComponent from "../../common/imageListComponent";
import CommonDivider from "../../common/commonDivider";

function AboutMeSection({ content }) {

    return (
        <>
            <FirstPara para={content.firstPara} />

            <ImageListComponent imageList={content.fistImages} />

            <br />

            <CommonDivider />

            {
                content.contentDetails.map((singleContent) => <SingleContent content={singleContent} />)
            }
        </>

    );

}

AboutMeSection.propTypes = {
    experiences: PropTypes.arrayOf(PropTypes.object)
}

function FirstPara({ para }) {

    return (
        <Typography variant="body2" color="text.secondary" sx={{
            fontWeight: "normal"
        }}>
            {para}
        </Typography>
    );
}

function SingleContent({ content }) {

    return (
        <>
            <br />
            <Typography variant="h4" color="text.primary">
                {content.title}
            </Typography>
            <br />
            {
                content.content.map((contentDesc) => (
                    <>
                        <ExperienceOverview title={contentDesc.title} />
                        <br />
                        <DescriptionList list={contentDesc.content} />
                        <br />
                    </>
                ))
            }

            <CommonDivider />
            <br />
        </>
    );
}

export default AboutMeSection;
