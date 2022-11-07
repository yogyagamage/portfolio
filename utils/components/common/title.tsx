import { Stack, Typography } from '@mui/material';

export default function Title(prop) {

    const { title } = prop;

    return (
        <div style={{ color: "black", height: "35vh", borderBottom: "1px dotted blue" }}>
            <Stack
                direction="column"
                justifyContent="center"
                sx={{
                    height: "100%",
                    textTransform: "capitalize"
                }}>

                <Typography variant="h4" color="text.secondary">
                    {title}
                </Typography>
            </Stack>

        </div>
    )
}
