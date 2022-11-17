import { Avatar, Chip, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { useEffect, useState } from 'react';
import { getTime, Time } from '../../../functions/common';
import CommonDivider from '../../common/commonDivider';
import Typewriter from 'typewriter-effect';

export default function NameDetails({ data }) {

    console.log(data.content[0]);

    return (
        <div style={{ background: "radial-gradient(circle, rgba(239,219,94,1) 0%, rgba(239,219,94,1) 0%, rgba(239,219,94,0) 36%);" }}>
            <br />
            <br />
            <Stack spacing={2} justifyContent="center" alignItems="center">
                <Stack spacing={1} justifyContent="center" alignItems="center">
                    <Salutation salutationData={data.content[0]} />
                    <MyNameIs myNameIs={data.content[1]} />
                </Stack>
                <Name name={data.content[2]} />
                <MyNameIs myNameIs={data.content[3]} />
                <Occupation occupation={data.content[4]} />
            </Stack>
            <br />
            <br />
            <CommonDivider />
        </div>
    );
}

function Salutation({ salutationData }) {
    const [time, setTime] = useState(Time.MORNING);
    const [salutaion, setSalutation] = useState(salutationData.morningSalute);

    useEffect(() => {
        setTime(getTime());
    }, [setTime, getTime]);

    useEffect(() => {
        switch (time) {
            case Time.MORNING:
                setSalutation(salutationData.morningSalute);
                break;
            case Time.AFTERNOON:
                setSalutation(salutationData.afternoonSalute);
                break;
            case Time.EVENING:
                setSalutation(salutationData.eveningSalute);
                break;
            default:
                break;
        }
    }, [setSalutation, time]);

    return (
        <Typography variant="body1" color="text.primary" align="center">
            {salutationData.body} {salutaion} 👋
        </Typography>
    )
}

function MyNameIs({ myNameIs }) {

    return (
        <Typography variant="body1" color="text.primary" align="center">
            {myNameIs.body}
        </Typography>
    )
}

function Name({ name }) {

    return (
        <Typography variant="h2" color="text.primary" align="center">
            <b>{name.body}</b>
        </Typography>
    )
}

function Occupation({ occupation }) {

    return (
        <Typography variant="h3" color="text.primary" align="center">
            <Typewriter
                options={{
                    strings: occupation.body,
                    autoStart: true,
                    loop: true,
                }}
            />
        </Typography>
    )
}

