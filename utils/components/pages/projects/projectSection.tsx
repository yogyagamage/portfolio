import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { IconButton, ImageListItemBar } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Link from 'next/link';
import { useState } from 'react';

export default function ProjectSection({ projects }) {
    
    return (
        <ImageList
            variant="quilted"
            cols={4}
            rowHeight={200}
        >
            {projects.map((project) => (
                <ProjectCard project={project} />
            ))}
        </ImageList>
    );
}

function ProjectCard({ project }) {

    const [showTitle, setShowTitle] = useState(false)

    const srcset = (image: string, size: number, rows = 1, cols = 1) => {
        return {
            src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
            srcSet: `${image}?w=${size * cols}&h=${size * rows
                }&fit=crop&auto=format&dpr=2 2x`,
        };
    }

    return (
        <Link href={`/projects/${project.name}`}>
            <ImageListItem
                key={project.image}
                cols={project.cols}
                rows={project.rows}
                style={{ cursor: "pointer" }}>
                <img
                    {...srcset(project.image, 1100, project.rows, project.cols)}
                    alt={project.name}
                    loading="lazy"
                    onMouseOver={() => setShowTitle(true)}
                    onMouseOut={() => setShowTitle(false)}
                    style={{mixBlendMode : "multiply"}}
                />
                {
                    showTitle
                        ? <ImageListItemBar
                            title={project.name}
                            subtitle={project.role}
                            actionIcon={
                                <IconButton sx={{ color: 'rgba(255, 255, 255, 1)' }}>
                                    <ArrowCircleRightIcon />
                                </IconButton>
                            }
                        />
                        : null
                }

            </ImageListItem>
        </Link>

    );
}
