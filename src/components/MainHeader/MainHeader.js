import "./MainHeader.css"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';

import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import {useState} from "react";
import LanguageSelect from "./LanguajeSelect/LanguajeSelect";
import {useTranslation} from "react-i18next";
import {NavLink, useLocation} from "react-router-dom";


const MainHeader = () => {
    const [anchorElNav, setAnchorElNav] = useState(null);

    const location = useLocation();
    const {t: translate} = useTranslation();

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };


    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    const navLinkStyles = {
        display: "block",
        textDecoration: "none",
    };

    return (
        <AppBar position="static" sx={{background: "#FFF", color: "#000000"}}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box
                        component="div"
                        sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}
                    >
                        <img src="/LogoOGPDEV2.png" alt="Logo"/>
                    </Box>
                    <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            sx={{color: "#00b0f0"}}
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: {xs: 'block', md: 'none'},
                            }}
                        >
                            <NavLink
                                style={{textDecoration: "none", color: "#00b0f0"}}
                                to={`/`}

                            >
                                <MenuItem key="header_menu_about_me" onClick={handleCloseNavMenu}
                                          sx={{
                                              backgroundColor: location.pathname === "/" ? "#00b0f0" : "#fff",
                                              color: location.pathname === "/" ? "#fff" : "#00b0f0"
                                          }}
                                >
                                    <Typography textAlign="center">{translate("header_menu_about_me")}</Typography>
                                </MenuItem>
                            </NavLink>
                            <NavLink
                                style={{textDecoration: "none", color: "#00b0f0"}}
                                to={`/portfolio`}

                            >
                                <MenuItem key="header_menu_portfolio" onClick={handleCloseNavMenu}
                                          sx={{
                                              backgroundColor: location.pathname === "/portfolio" ? "#00b0f0" : "#fff",
                                              color: location.pathname === "/portfolio" ? "#fff" : "#00b0f0"
                                          }}>
                                    <Typography textAlign="center">{translate("header_menu_portfolio")}</Typography>
                                </MenuItem>
                            </NavLink>
                            <NavLink
                                style={{textDecoration: "none", color: "#00b0f0"}}
                                to={`/experience`}

                            >
                                <MenuItem key="header_menu_experience" onClick={handleCloseNavMenu}
                                          sx={{
                                              backgroundColor: location.pathname === "/experience" ? "#00b0f0" : "#fff",
                                              color: location.pathname === "/experience" ? "#fff" : "#00b0f0"
                                          }}>
                                    <Typography textAlign="center">{translate("header_menu_experience")}</Typography>
                                </MenuItem>
                            </NavLink>
                        </Menu>
                    </Box>
                    <Box
                        component="div"
                        sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}
                    >
                        <img src="/LogoOGPDEV2.png" alt="Logo"/>
                    </Box>
                    <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                        <NavLink
                            style={{...navLinkStyles, backgroundColor: location.pathname === "/" ? "#00b0f0" : '#fff'}}
                            to={`/`}

                        >
                            <Button
                                key="header_menu_about_me"
                                onClick={handleCloseNavMenu}
                                sx={{my: 2, display: 'block', color: location.pathname === "/" ? "#fff" : '#00b0f0'}}
                            >
                                {translate("header_menu_about_me")}
                            </Button>
                        </NavLink>
                        <NavLink
                            style={{
                                ...navLinkStyles,
                                backgroundColor: location.pathname === "/portfolio" ? "#00b0f0" : '#fff'
                            }}
                            to={`/portfolio`}

                        >
                            <Button
                                key="header_menu_portfolio"
                                onClick={handleCloseNavMenu}
                                sx={{
                                    my: 2,
                                    display: 'block',
                                    color: location.pathname === "/portfolio" ? "#fff" : '#00b0f0'
                                }}
                            >
                                {translate("header_menu_portfolio")}
                            </Button>
                        </NavLink>
                        <NavLink
                            style={{
                                ...navLinkStyles,
                                backgroundColor: location.pathname === "/experience" ? "#00b0f0" : '#fff'
                            }}
                            to={`/experience`}

                        >
                            <Button
                                key="header_menu_experience"
                                onClick={handleCloseNavMenu}
                                sx={{
                                    my: 2,
                                    display: 'block',
                                    color: location.pathname === "/experience" ? "#fff" : '#00b0f0'
                                }}
                            >
                                {translate("header_menu_experience")}
                            </Button>
                        </NavLink>
                    </Box>

                    <Box sx={{flexGrow: 0}}>
                        <LanguageSelect/>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default MainHeader;