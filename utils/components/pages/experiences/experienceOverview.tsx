import { List, ListItem, Typography } from "@mui/material";


export default function ExperienceOverview(prop) {

    const { place, position, duration } = prop;

    return (
        <List dense={true} >
            <SingleDetail place={place} />
            <SingleDetail position={position} />
            <SingleDetail duration={duration} />
        </List>
    );
}

function SingleDetail(prop) {

    const { place, position, duration } = prop;

    return (
        <ListItem disablePadding>
            {
                place
                    ? <Typography variant="h5" color="text.primary">
                        {place}
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