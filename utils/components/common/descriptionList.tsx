import { List, ListItem, Stack, Typography } from "@mui/material";
import PropTypes from "prop-types";

function DescriptionList({ list }) {

    return (
        <Stack spacing={3}>
            {
                list.map((item) => <DescriptionListItem title={item.title} body={item.body} links={item.links} />)
            }
        </Stack>
    );
}

DescriptionList.propTypes = {
    list: PropTypes.arrayOf(PropTypes.object)
}

export default DescriptionList;

function DescriptionListItem({ title, body, links }) {

    return (
        <Stack spacing={0.8}>
            <Typography variant="h6" color="text.primary">
                {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {body}
            </Typography>
            {
                links
                    ?
                    <List dense>
                        {
                            links.map((item) => <ListItem>
                                <Typography variant="body2" color="text.secondary">
                                    <a href={item.link}><i>{item.title}</i></a>
                                </Typography>
                            </ListItem>)
                        }
                    </List>
                    : null
            }

        </Stack>
    );
}

DescriptionListItem.propTypes = {
    title: PropTypes.string,
    body: PropTypes.string
}
