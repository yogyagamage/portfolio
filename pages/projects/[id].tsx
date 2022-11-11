import DescriptionList from "../../utils/components/common/descriptionList";
import MainGrid from "../../utils/components/common/mainGrid";
import NavBar from "../../utils/components/common/navBar";
import Title from "../../utils/components/common/title";
import OverallDetails from "../../utils/components/pages/projects-id/overallDetails";
import projectConfig from "../../utils/data/projects.json";

export async function getServerSideProps(context) {

    const projectName = context.query.id;
    const projects = projectConfig.projects;

    const project = projects.filter((project) => project.name === projectName)[0];

    return {
        props: { project }
    };

}

export default function SingleProject({ project }) {

    return (
        <>
            <NavBar />
            <Title title={project.name} />
            <MainGrid>
                <OverallDetails overview={project.overview} />
                <br />
                <DescriptionList list={project.content}/>

            </MainGrid>
        </>
    );
}
