import ImageList from '@mui/material/ImageList';
import ProjectCard from './projectCard';

export default function ProjectSection() {
    return (
        <ImageList
            variant="quilted"
            cols={4}
        >
            {itemData.map((item) => (
                <ProjectCard item={item} />
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
        rows: 4,
    },
    {
        img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
        title: 'Hats',
        cols: 2,
        rows: 4,
    }
];
