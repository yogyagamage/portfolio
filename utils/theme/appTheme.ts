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
            fontFamily: "Minipax-Regular"
        },
        body2: {
            fontFamily: "SpaceGrotesk-Regular"
        },
        button: {
            fontFamily: "SpaceGrotesk-Regular",
            color: "#242424"
        },
        subtitle2: {
            fontFamily: "Minipax-Regular"
        },
        h2: {
            fontFamily: "Minipax-Regular"
        },
        h3: {
            fontFamily: "Minipax-Regular"
        },
        h4: {
            fontFamily: "Minipax-Regular"
        },

        h5: {
            fontFamily: "Minipax-SemiBold"
        },

        h6: {
            fontFamily: "Minipax-SemiBold"
        },
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
