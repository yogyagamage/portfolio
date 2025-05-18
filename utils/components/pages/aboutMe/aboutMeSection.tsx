import { Stack, Typography, Box, Grid } from "@mui/material";
import PropTypes from "prop-types";
import CommonDivider from "../../common/commonDivider";
import DescriptionList from "../../common/descriptionList";
import ImageListComponent from "../../common/imageListComponent";
import ExperienceOverview from "../experiences/experienceOverview";

function AboutMeSection({ content }) {
    return (
        <>  
            <Stack spacing={3}>
                {
                    content.firstPara.map((para) => (
                        <FirstPara key={para.key} para={para.body} />
                    ))
                }
            </Stack>

            <CommonDivider />

            {
                content.contentDetails.map((singleContent) => (
                    <SingleContent key={singleContent.title} content={singleContent} />
                ))
            }
        </>
    );
}

AboutMeSection.propTypes = {
    experiences: PropTypes.arrayOf(PropTypes.object)
};

function FirstPara({ para }) {
    return (
        <Typography
            variant="body1"
            color="text.secondary"
            sx={{ fontWeight: "normal" }}
        >
            {para}
        </Typography>
    );
}

function SingleContent({ content }) {
    return (
        <>
            <br />
            <Typography variant="h4" color="text.primary">
                {content.title}
            </Typography>
            <br />
            {
                content.content.map((contentDesc) => (
                    <div key={contentDesc.title}>
                        <ExperienceOverview title={contentDesc.title} />
                        <br />
                        {
                            contentDesc.title[0] === "Algorithmic Art"
                                ? <ArtDescriptionList list={contentDesc.content} />
                                : <DescriptionList list={contentDesc.content} />
                        }
                        <br />
                    </div>
                ))
            }
            <CommonDivider />
        </>
    );
}

function getRandomArtworks(artworks: any[], count: number = 2) {
    const shuffled = [...artworks].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// This handles the artwork rendering logic
function ArtDescriptionList({ list }) {
    return (
        <Stack spacing={3} direction="column">
            {list.map((item, idx) => {
                // Text description
                if (item.body && Array.isArray(item.body) && item.body[0].body && typeof item.body[0].body[0] === "string") {
                    
                    return item.body[0].body.map((text, tidx) => (
                        <Typography
                            key={`${idx}-${tidx}`}
                            variant="body1"
                            color="text.secondary"
                            sx={{ mb: 2 }}
                        >
                            {text}
                        </Typography>
                    ));
                }

                // Artwork grid - randomly pick 2
                if (item.body && Array.isArray(item.body) && item.body[0]?.file) {
                    const selectedArtworks = getRandomArtworks(item.body, 2);

                    return (
                        <Grid key={idx} container spacing={2} direction="column" width={"100%"}>
                            {selectedArtworks.map((art, aidx) => (
                                <Grid item xs={12} sm={6} key={aidx}>
                                    <iframe
                                        src={art.file}
                                        width={art.width}
                                        height={art.height}
                                        style={{ border: "none" }}
                                        title={`artwork-${aidx}`}
                                    />
                                </Grid>
                            ))}
                        </Grid>
                    );
                }
                return null;
            })}
        </Stack>
    );
}

export default AboutMeSection;
