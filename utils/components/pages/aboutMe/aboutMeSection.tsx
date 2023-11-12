import { Stack, Typography } from "@mui/material";
import PropTypes from "prop-types";
import CommonDivider from "../../common/commonDivider";
import DescriptionList from "../../common/descriptionList";
import ImageListComponent from "../../common/imageListComponent";
import ExperienceOverview from "../experiences/experienceOverview";

function AboutMeSection({ content }) {

    return (
        <>  
        <Stack spacing={ 3 }>
                {
                    content.firstPara.map((para) => <FirstPara key={ para.key } para={ para.body } /> )
                }
            </Stack>

            <CommonDivider />

            {
                content.contentDetails.map(
                    (singleContent) => <SingleContent key={ singleContent.title } content={ singleContent } />)
            }
        </>

    );

}

AboutMeSection.propTypes = {
    experiences: PropTypes.arrayOf(PropTypes.object)
};

function FirstPara({ para }) {

    return (
        <Typography
            variant="body1"
            color="text.secondary"
            sx={ {
                fontWeight: "normal"
            } }>
            { para }
        </Typography>
    );
}

function SingleContent({ content }) {

    return (
        <>
            <br />
            <Typography variant="h4" color="text.primary">
                { content.title }
            </Typography>
            <br />
            {
                content.content.map((contentDesc) => (
                    <>
                        <ExperienceOverview title={ contentDesc.title } />
                        <br />
                        <DescriptionList list={ contentDesc.content } />
                        <br />
                    </>
                ))
            }
            <CommonDivider />
        </>
    );
}

export default AboutMeSection;
