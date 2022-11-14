import MainGrid from "../utils/components/common/mainGrid";
import NavBar from "../utils/components/common/navBar";
import Title from "../utils/components/common/title";
import AboutMeSection from "../utils/components/pages/aboutMe/aboutMeSection";
import ExperienceSection from "../utils/components/pages/experiences/experienceSection";
import experienceConfig from "../utils/data/experience.json";
import meConfing from "../utils/data/me.json";

export default function AboutMe() {
    return (
        <>
            <NavBar />
            <Title title={ meConfing.pageTitle } />
            <MainGrid>
                <AboutMeSection content={ meConfing.content }/>
            </MainGrid>
        </>

    );
}
