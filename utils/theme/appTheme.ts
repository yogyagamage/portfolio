import { pink } from "@mui/material/colors";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

export const appTheme = responsiveFontSizes(createTheme({
    palette: {
        primary: {
            main: "#FAFEFF",
            contrastText: "#242424"
        },
        secondary: pink,
        text: {
            primary: "#242424",
            secondary: "#667080"
        },
        divider: "#FAFEFF",
        background: {
            default: "#FAFEFF",
            paper: "#FAFEFF"

        }
    },
    typography: {
        body1: {
            fontFamily: "BioRhyme-Light"
        },
        body2: {
            fontFamily: "Cabin-Regular"
        },
        button: {
            fontFamily: "Cabin-Regular",
            color: "#242424"
        },
        subtitle2: {
            fontFamily: "BioRhyme-Light"
        },
        h2: {
            fontFamily: "BioRhyme-Light"
        },
        h3: {
            fontFamily: "BioRhyme-Light"
        },
        h4: {
            fontFamily: "BioRhyme-Light"
        },

        h5: {
            fontFamily: "BioRhyme-Medium"
        },

        h6: {
            fontFamily: "BioRhyme-Medium"
        }
    },
    components: {
        MuiAvatar: {
            defaultProps: {
                variant: "circular"
            },
            styleOverrides: {
                "root": {
                    width: "4vw",
                    height: "4vw"
                }
            }
        },
        MuiAvatarGroup: {
            defaultProps: {
                spacing: "small",
                variant : "circular",
            },
            styleOverrides : {
                root : {
                    position : "relative",
                    left : "0px"
                }
            }
        }
    }
}));
