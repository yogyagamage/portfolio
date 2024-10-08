import { ImageList, ImageListItem } from "@mui/material";
import PropTypes from "prop-types";

function ImageListComponent({ imageList }) {

    return (
        <ImageList cols={imageList.length}>
            {imageList.map((imageObject) => (
                <ImageListItem key={imageObject.imageg}>
                    <img
                        src={imageObject.image}
                        srcSet={imageObject.image}
                        alt={imageObject.alt}
                        loading="lazy"
                        style={{mixBlendMode : "difference"}}
                    />
                </ImageListItem>
            ))}
        </ImageList>
    );

}

ImageListComponent.propTypes = {
    experiences: PropTypes.arrayOf(PropTypes.object)
}

export default ImageListComponent;
