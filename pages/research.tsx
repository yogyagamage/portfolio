import React from "react";
import MainGrid from "../utils/components/common/mainGrid";
import NavBar from "../utils/components/common/navBar";
import Title from "../utils/components/common/title";
import ProjectSection from "../utils/components/pages/projects/projectSection";
import projectsConfig from "../utils/data/research.json";
import ExperienceSection from "../utils/components/pages/experiences/experienceSection";

export default function Projects() {
    return (
        <>
            <NavBar />
            <Title title={ projectsConfig.pageTitle } />
            <MainGrid>
                <ProjectSection researches={ projectsConfig.projects }/>
            </MainGrid>
        </>

    );
}
