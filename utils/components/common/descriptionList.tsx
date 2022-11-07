import { Stack, Typography } from "@mui/material";

export async function getServerSideProps(context) {

    const routerQuery = context.query.id;

    return {
        props: { routerQuery }
    };

}

export default function DescriptionList() {

    return (
        <Stack spacing={3}>
            <DescriptionListItem />
            <DescriptionListItem />
        </Stack>
    );
}

function DescriptionListItem() {

    return (
        <Stack spacing={0.8}>
            <Typography variant="h6" color="text.primary">
                Overview
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </Typography>
        </Stack>
    );
}