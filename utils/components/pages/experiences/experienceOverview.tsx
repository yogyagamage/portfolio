import { List, ListItem, Typography } from "@mui/material";


export default function ExperienceOverview() {

    return (
        <List dense={true} >
            <SingleDetail company="WSO2" />
            <SingleDetail position="Software Engineer" />
            <SingleDetail duration=" 04/2022 - Present" />
        </List>
    );
}

function SingleDetail(prop) {

    const { company, position, duration } = prop;

    return (
        <ListItem disablePadding>
            {
                company
                    ? <Typography variant="h6" color="text.primary">
                        {company}
                    </Typography>
                    : null
            }


            {
                position
                    ? <Typography variant="body1" color="text.primary">
                        {position}
                    </Typography>
                    : null
            }


            {
                duration
                    ? <Typography variant="subtitle2" color="text.secondary" sx={{
                        fontWeight: "normal"
                    }}>
                        {duration}
                    </Typography>
                    : null
            }

        </ListItem>
    );
}