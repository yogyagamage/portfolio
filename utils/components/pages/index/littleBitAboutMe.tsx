import CommonDivider from "../../common/commonDivider";
import DescriptionList from "../../common/descriptionList";
import SubSectionTitle from "../../common/subSectionTitle";

export default function LittleBitAboutMe({ data }) {
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
            <CommonDivider />
        </>
    );
}
