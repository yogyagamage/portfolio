import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { IconButton, ImageListItemBar } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useState } from 'react';

export default function ProjectSection({ projects }) {

    return (
        <ImageList
            variant="quilted"
            cols={4}
        >
            {projects.map((project) => (
                <ProjectCard project={project} />
            ))}
        </ImageList>
    );
}

const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast',
        rows: 2,
        cols: 2,
    },
    {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Burger',
        cols: 2,
    },
    {
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Camera',
        cols: 2,
    },
    {
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        title: 'Coffee',
        cols: 2,
        rows: 2,
    },
    {
        img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
        title: 'Hats',
        cols: 2,
        rows: 2,
    }
];

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
        <ImageListItem
            key={project.image}
            cols={project.cols}
            rows={project.rows}
            onClick={()=>console.log("asdsa")}
            style={{cursor: "pointer"}}>
            <img
                {...srcset(project.image, 1100, project.rows, project.cols)}
                alt={project.name}
                loading="lazy"
                onMouseOver={() => setShowTitle(true)}
                onMouseOut={() => setShowTitle(false)}
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
    );
}
