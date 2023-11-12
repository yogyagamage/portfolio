import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { IconButton, ImageListItemBar } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Link from 'next/link';
import { useState } from 'react';
import CommonDivider from '../../common/commonDivider';
import ProjectOverview from './proejctOverview';
import DescriptionList from '../../common/descriptionList';

export default function ProjectSection({ researches }) {
    
    return (
        <>
            {
                researches.map((research) => <SingleResearch research={research} />)
            }
        </>
    );
}

function SingleResearch({ research }) {

    return (
        <>
            <ProjectOverview project={research} />
            <br />
            <DescriptionList list={research.content} />

            <CommonDivider />
        </>
    );
}
