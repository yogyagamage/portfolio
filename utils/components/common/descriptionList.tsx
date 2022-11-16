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
                    images={item.images}
                    presentations={item.presentations} />)
            }
        </Stack>
    );
}

DescriptionList.propTypes = {
    list: PropTypes.arrayOf(PropTypes.object)
}

export default DescriptionList;

function DescriptionListItem({ title, body, links, images, presentations }) {

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
                    <List dense disablePadding>
                        {
                            links.map((item) => <ListItem alignItems="flex-start" disableGutters>
                                <Typography variant="body2" color="text.secondary">
                                    <a href={item.link} target="_blank"><u><i>{item.title}</i></u></a>
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
            {
                presentations
                    ? <List dense disablePadding>
                        {
                            presentations.map((presentation) => <ListItem alignItems="center" disableGutters>
                                <iframe loading="lazy" src={presentation.link} allowFullScreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" width="100%" style={{ height: "60vh" }} />
                            </ListItem>)
                        }
                    </List>



                    : null
            }

        </Stack >
    );
}

DescriptionListItem.propTypes = {
    title: PropTypes.string,
    body: PropTypes.string
}
