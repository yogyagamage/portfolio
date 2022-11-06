import { Grid, IconButton, ImageListItemBar, Popover } from '@mui/material';
import ImageListItem from '@mui/material/ImageListItem';
import { useState } from 'react';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

function srcset(image: string, size: number, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${size * rows
            }&fit=crop&auto=format&dpr=2 2x`,
    };
}

export default function ProjectCard(prop) {

    const { item } = prop;

    const [showTitle, setShowTitle] = useState(false)


    return (
        <ImageListItem key={item.img} cols={item.cols} rows={item.rows}>
            <img
                {...srcset(item.img, 121, item.rows, item.cols)}
                alt={item.title}
                loading="lazy"
                onMouseOver={() => setShowTitle(true)}
                onMouseOut={() => setShowTitle(false)}
            />
            {
                showTitle
                    ? <ImageListItemBar
                        title={item.title}
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

