import { List, ListItem, Typography } from "@mui/material";

export default function ProjectOverview({ project }) {

    return (
        <List dense={true} >
            <Typography variant="h6" color="text.primary">
                {project.name}
            </Typography>
            <Typography variant="body1" color="text.primary">
                {project.place}
            </Typography>
            <Typography variant="subtitle2" color="text.secondary">
                {project.duration}
            </Typography>
        </List>
    );
}
