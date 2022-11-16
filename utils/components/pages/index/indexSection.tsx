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
import Projects from "./projects";
import MyInterests from "./myInterests";

function IndexSection({ content }) {

    return (
        <>
            {
                content.map((singleContent) => {
                    switch (singleContent.id) {
                        case 1:
                            return <LittleBitAboutMe data={singleContent} />
                        case 2:
                            return <MyInterests data={singleContent} />
                        case 3:
                            return <Projects data={singleContent} />
                        case 4:
                            return <MyWritings data={singleContent} />
                        case 5:
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
