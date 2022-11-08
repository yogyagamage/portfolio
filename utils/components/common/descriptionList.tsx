import { Stack, Typography } from "@mui/material";
import PropTypes from "prop-types";

function DescriptionList({ list }) {

    return (
        <Stack spacing={3}>
            {
                list.map((item) => <DescriptionListItem title={item.title} body={item.body} />)
            }
        </Stack>
    );
}

DescriptionList.propTypes = {
    list: PropTypes.arrayOf(PropTypes.object)
}

export default DescriptionList;

function DescriptionListItem({ title, body }) {

    return (
        <Stack spacing={0.8}>
            <Typography variant="h6" color="text.primary">
                {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {body}
            </Typography>
        </Stack>
    );
}

DescriptionListItem.propTypes = {
    title : PropTypes.string,
    body: PropTypes.string
}
