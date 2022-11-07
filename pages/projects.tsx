import React from "react";
import MainGrid from "../utils/components/common/mainGrid";
import NavBar from "../utils/components/common/navBar";
import Title from "../utils/components/common/title";
import ProjectSection from "../utils/components/pages/projects/projectSection";

export default function Projects() {
    return (
        <>
            <NavBar />
            <Title title="projects" />
            <MainGrid>
                <ProjectSection />
            </MainGrid>
        </>

    );
}
