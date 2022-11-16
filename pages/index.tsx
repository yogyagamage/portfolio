import React from "react";
import MainGrid from "../utils/components/common/mainGrid";
import NavBar from "../utils/components/common/navBar";
import Title from "../utils/components/common/title";
import AboutMeSection from "../utils/components/pages/aboutMe/aboutMeSection";
import ProjectSection from "../utils/components/pages/projects/projectSection";
import projectsConfig from "../utils/data/projects.json";
import indexConfig from "../utils/data/index.json";
import IndexSection from "../utils/components/pages/index/indexSection";

export default function Projects() {
    return (
        <>
            <NavBar />
            <MainGrid>
                <IndexSection content={indexConfig.content} />
            </MainGrid>
        </>

    );
}
