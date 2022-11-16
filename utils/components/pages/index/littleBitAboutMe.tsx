import { Typography } from '@mui/material'
import React from 'react'
import CommonDivider from '../../common/commonDivider'
import DescriptionList from '../../common/descriptionList'

export default function LittleBitAboutMe({ data }) {
    return (
        <>
            <br />
            <Typography variant="h4" color="text.primary">
                {data.title}
            </Typography>
            <br />
            {
                data.content.map((contentDesc) => (
                    <>
                        <DescriptionList list={contentDesc.content} />
                        <br />
                    </>
                ))
            }

            <CommonDivider />
        </>
    );
}
