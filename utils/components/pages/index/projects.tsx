import { ArrowCircleRight } from '@mui/icons-material';
import { IconButton, ImageList, ImageListItem, ImageListItemBar, Typography } from '@mui/material';
import Link from 'next/link';
import projectConfig from "../../../data/projects.json";
import CommonDivider from '../../common/commonDivider';

export default function Projects({ data }) {
    return (
        <>
            <br />
            <Typography variant="h4" color="text.primary">
                {data.title}
            </Typography>
            <br />

            <ImageList cols={3}>

                {
                    projectConfig.projects.slice(0, 3).map((project) =><SingleProject project={project} /> )
                }

            </ImageList>

            <CommonDivider />
        </>
    );
}

function SingleProject({ project }) {
    return (
        <Link href={`/projects/${project.name}`}>
            <ImageListItem
                key={project.image}
                style={{ cursor: "pointer" }}>
                <img
                    src={project.image}
                    alt={project.name}
                    loading="lazy"
                    style={{mixBlendMode : "multiply"}}
                />
                <ImageListItemBar
                    title={project.name}
                    subtitle={project.role}
                    actionIcon={
                        <IconButton sx={{ color: 'rgba(255, 255, 255, 1)' }}>
                            <ArrowCircleRight />
                        </IconButton>
                    }
                />
            </ImageListItem>
        </Link>
    );
}
