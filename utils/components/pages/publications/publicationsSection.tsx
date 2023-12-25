import Typography from "@mui/material/Typography";
import styles from "../../../../styles/publicationsSections.module.css";

export default function PublicationsSection({ publications }) {
    
    return (
        <>
            {
                publications.map((publication) => (
                    <SinglePublication 
                        key={ publication.title } 
                        publication={ publication } />
                ))
            }
        </>
    );
}

function SinglePublication({ publication }) {

    return (
        <>
            <div>
                <Typography variant="body2" color="text.primary"> 
                    { publication.title }
                </Typography>
                {
                    publication.status && (
                        <Typography 
                            className={ styles["publication-link"] } 
                            variant="body2" 
                            color="text.secondary" 
                            display="inline"
                        >
                            { publication.status }
                        </Typography>
                    )
                }
                {
                    publication.link && (
                        <Typography 
                            className={ styles["publication-link"] } 
                            variant="body2" 
                            color="text.secondary" 
                            display="inline"
                        >
                            <a href={ publication.link } target="_blank" rel="noreferrer"><u><i>link</i></u></a>
                        </Typography>
                    )
                }
            </div>
            <br/>
        </>
    );
}
