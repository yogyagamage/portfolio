import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { FormControlLabel, Snackbar, Tooltip, styled } from "@mui/material";
import Switch from "@mui/material/Switch";
import * as React from "react";
import navItemsConfig from "../../../utils/data/navItems.json";
import { useTrueDarkMode } from "../../../utils/context/TrueDarkModeContext";
import quotes from "../../../utils/data/quotes.json";

interface Props {
    window?: () => Window;
}

const drawerWidth = 240;

// Styled Switch with sun/moon icons
const IconSwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    '& .MuiSwitch-switchBase': {
        margin: 1,
        padding: 0,
        transform: 'translateX(6px)',
        '&.Mui-checked': {
            color: '#fff',
            transform: 'translateX(22px)',
            '& .MuiSwitch-thumb:before': {
                content: '"🌑"',
            },
            '& + .MuiSwitch-track': {
                backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
                opacity: 1,
            },
        },
    },
    '& .MuiSwitch-thumb': {
        backgroundColor: '#fff',
        width: 32,
        height: 32,
        '&:before': {
            content: '"🌘"',
            position: 'absolute',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 18,
        },
    },
    '& .MuiSwitch-track': {
        borderRadius: 20 / 2,
        backgroundColor: '#aab4be',
        opacity: 1,
    },
}));

export default function NavBar(props: Props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const { trueDarkMode, setTrueDarkMode } = useTrueDarkMode();

    const [snackbarOpen, setSnackbarOpen] = React.useState(false);
    const [selectedQuote, setSelectedQuote] = React.useState({ quote: "", movie: "" });

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const toggleDarkMode = () => {
        setTrueDarkMode(prev => !prev);
    };

    const handleHover = () => {
        const random = quotes[Math.floor(Math.random() * quotes.length)];
        setSelectedQuote(random);
        setSnackbarOpen(true);
    };

    const handleCloseSnackbar = () => {
        setSnackbarOpen(false);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
            <Divider />
            <List>
                {navItemsConfig.content.map((item) => (
                    <ListItem key={item.title} disablePadding>
                        <ListItemButton sx={{ textAlign: "center" }} href={item.link} target={item.target ? item.target : "_self"}>
                            <ListItemText primary={item.title} />
                        </ListItemButton>
                    </ListItem>
                ))}
                <ListItem disablePadding sx={{ justifyContent: "center", mt: 1 }}>
                    <FormControlLabel
                        control={
                            <Tooltip title="" onOpen={handleHover}>
                                <IconSwitch checked={trueDarkMode} onChange={toggleDarkMode} />
                            </Tooltip>
                        }
                        label="Reveal Mode"
                    />
                </ListItem>
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <>
            <Box sx={{ display: "flex" }}>
                <AppBar component="nav">
                    <Toolbar>
                        <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
                            <Button key="name" href={navItemsConfig.title.link} target="_self" sx={{ textTransform: "lowercase" }}>
                                <Typography variant="h6" component="div" color="primary">
                                    {navItemsConfig.title.title}
                                </Typography>
                            </Button>
                        </Box>
                        <Box sx={{ display: { xs: "none", sm: "flex" }, alignItems: "center" }}>
                            {navItemsConfig.content.map((item) => (
                                <Button key={item.title} href={item.link} target={item.target ? item.target : "_self"}>
                                    {item.title}
                                </Button>
                            ))}
                            <Tooltip title="" onOpen={handleHover}>
                                <IconSwitch checked={trueDarkMode} onChange={toggleDarkMode} />
                            </Tooltip>
                        </Box>
                        <IconButton
                            color="primary"
                            aria-label="open drawer"
                            edge="end"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: "none" } }}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <Box component="nav">
                    <Drawer
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true,
                        }}
                        sx={{
                            display: { xs: "block", sm: "none" },
                            "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Box>
                <Box sx={{ p: 4 }} />
            </Box>

            <Snackbar
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                open={snackbarOpen}
                onClose={handleCloseSnackbar}
                style={{zIndex: 9999}}
                message={
                    <>
                        <strong>{selectedQuote.quote}</strong>
                        <div style={{ fontSize: "0.8em", fontStyle: "italic" }}>— {selectedQuote.movie}</div>
                    </>
                }
                autoHideDuration={4000}
            />
        </>
    );
}
