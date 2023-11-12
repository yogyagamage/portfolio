import { Avatar, Button, Stack } from "@mui/material";
import DescriptionList from "../../common/descriptionList";
import SubSectionTitle from "../../common/subSectionTitle";
import CommonDivider from "../../common/commonDivider";

export default function Contact({ data }) {
    return (
        <>
            <br />
            <SubSectionTitle data={ data } />
            <br />

            {
                data.content.map((contentDesc) => (
                    <>
                        <DescriptionList list={ contentDesc.content } />
                        <br />
                    </>
                ))
            }

            <Stack direction="row" spacing={ 0 } justifyContent="center">
                {
                    data.icons.map((icon) => <SingleContact key={ icon.alt } icon={ icon } />)
                }
            </Stack>

            <CommonDivider />
        </>
    );
}

function SingleContact({ icon }) {
    return (
        <Button href={ icon.link } target="_blank">
            <Avatar alt={ icon.alt } src={ icon.image } />
        </Button>
    );
}
