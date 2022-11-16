import { Avatar, AvatarGroup, Button, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import CommonDivider from '../../common/commonDivider'
import DescriptionList from '../../common/descriptionList'

export default function Contact({ data }) {
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

            <Stack direction="row" spacing={0} justifyContent="center">
                {
                    data.icons.map((icon) => <SingleContact icon={icon} />)
                }
            </Stack>

            <CommonDivider />
        </>
    );
}

function SingleContact({ icon }) {
    return (
        <Button href={icon.link} target="_blank">
            <Avatar alt={icon.alt} src={icon.image} />
        </Button>
    );
}
