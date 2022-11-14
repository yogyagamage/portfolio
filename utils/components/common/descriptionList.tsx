import { List, ListItem, Stack, Typography } from "@mui/material";
import PropTypes from "prop-types";
import ImageListComponent from "./imageListComponent";

function DescriptionList({ list }) {

    return (
        <Stack spacing={3}>
            {
                list.map((item) => <DescriptionListItem
                    title={item.title}
                    body={item.body}
                    links={item.links}
                    images={item.images} />)
            }
        </Stack>
    );
}

DescriptionList.propTypes = {
    list: PropTypes.arrayOf(PropTypes.object)
}

export default DescriptionList;

function DescriptionListItem({ title, body, links, images }) {

    return (
        <Stack spacing={0.8}>
            {title
                ? <Typography variant="h6" color="text.primary">
                    {title}
                </Typography>
                : null
            }
            <Typography variant="body2" color="text.secondary" sx={title ? null : { marginTop: "-10px" }}>
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

            {
                images
                    ? <div style={{ marginTop: "3px" }}>
                        <ImageListComponent imageList={images} />
                    </div>
                    : null
            }


        </Stack>
    );
}

DescriptionListItem.propTypes = {
    title: PropTypes.string,
    body: PropTypes.string
}
