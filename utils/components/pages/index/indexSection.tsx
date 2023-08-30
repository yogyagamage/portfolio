import PropTypes from "prop-types";
import LittleBitAboutMe from "../index/littleBitAboutMe";
import Contact from "./contact";
import MyInterests from "./myInterests";
import MyWritings from "./myWritings";
import NameDetails from "./nameDetails";
import Projects from "./projects";

function IndexSection({ content }) {

    return (
        <>
            {
                content.map((singleContent) => {
                    switch (singleContent.id) {
                        case 0:
                            return <NameDetails data= { singleContent } />;
                        case 1:
                            return <LittleBitAboutMe data= { singleContent } />;
                        case 2:
                            return <MyInterests data= { singleContent } />;
                        case 3:
                            return <Projects data= { singleContent } />;
                        case 4:
                            return <MyWritings data= { singleContent } />;
                        case 5:
                            return <Contact data= { singleContent } />;
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
