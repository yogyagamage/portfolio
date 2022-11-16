import { Avatar, Chip, Typography } from '@mui/material'
import { Stack } from '@mui/system';
import React from 'react'
import CommonDivider from '../../common/commonDivider'
import DescriptionList from '../../common/descriptionList'

export default function MyInterests({ data }) {
    return (
        <>
            <br />
            <Typography variant="h4" color="text.primary">
                {data.title}
            </Typography>
            <br />
            {
                data.interests.map((interest) => (
                    <>
                        <Interest interest={interest} />
                        <br />
                    </>
                ))
            }

            <CommonDivider />
        </>
    );
}

function Interest({ interest }) {

    return (
        <>
            <Stack spacing={1}>
                <Typography variant="h6" color="text.secondary" sx={{
                    fontWeight: "normal"
                }}>
                    {interest.title}
                </Typography>
                <Stack direction="column" spacing={0.4}>
                    {
                        interest.interests.map(
                            (interestDetails) => <Chip
                                avatar={interestDetails.imageUrl ? <Avatar src={interestDetails.imageUrl} /> : null}
                                label={interestDetails.title}
                                color={interest.color} />
                        )
                    }
                </Stack>
            </Stack>

        </>
    );
}
