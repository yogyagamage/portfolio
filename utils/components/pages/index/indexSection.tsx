import { Divider, Typography } from "@mui/material";
import DescriptionList from "../../common/descriptionList";
import ExperienceOverview from "../experiences/experienceOverview";
import PropTypes from "prop-types";
import ImageListComponent from "../../common/imageListComponent";
import CommonDivider from "../../common/commonDivider";
import LittleBitAboutMe from "../index/littleBitAboutMe";
import { useCallback } from "react";
import MyWritings from "./myWritings";
import Contact from "./contact";

function IndexSection({ content }) {

    return (
        <>
            {
                content.map((singleContent) => {
                    switch (singleContent.id) {
                        case 1:
                            return <LittleBitAboutMe data={singleContent} />

                        case 5:
                            return <MyWritings data={singleContent} />

                        case 6:
                            return <Contact data={singleContent} />
                        default:
                            break;
                    }
                })
            }
        </>

    );

}

IndexSection.propTypes = {
    experiences: PropTypes.arrayOf(PropTypes.object)
}

export default IndexSection;
