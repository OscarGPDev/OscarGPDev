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
    const {t} = useTranslation();

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };


    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    const navLinkStyles = {
        display: "block",
        margin: "1rem 0",
        textDecoration: "none",
    };

    return (
        <AppBar position="static" sx={{background: "#FFF", color: "#000000"}}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <img src="/LogoOGPDEV2.png" alt="Logo"/>
                    <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="primary"
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
                            <MenuItem key="header_menu_portfolio" onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">{t("header_menu_portfolio")}</Typography>
                            </MenuItem>
                            <MenuItem key="header_menu_education" onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">{t("header_menu_education")}</Typography>
                            </MenuItem>
                            <MenuItem key="header_menu_experience" onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">{t("header_menu_experience")}</Typography>
                            </MenuItem>
                        </Menu>
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        className="logo"
                        sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}
                    >
                        Oscar Guzmán
                    </Typography>
                    <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                        <NavLink
                            style={navLinkStyles}
                            sx={{}}
                            to={`/portfolio`}

                        >
                            <Button
                                key="header_menu_portfolio"
                                onClick={handleCloseNavMenu}
                                sx={{my: 2, display: 'block'}}
                                color={location.pathname === "/portfolio" ? "secondary" : 'primary'}
                            >
                                {t("header_menu_portfolio")}
                            </Button>
                        </NavLink>

                        <NavLink
                            style={navLinkStyles}
                            to={`/education`}

                        >
                            <Button
                                key="header_menu_education"
                                onClick={handleCloseNavMenu}
                                sx={{my: 2, display: 'block'}}
                                color={location.pathname === "/education" ? "secondary" : 'primary'}
                            >
                                {t("header_menu_education")}
                            </Button>
                        </NavLink>
                        <NavLink
                            style={navLinkStyles}
                            to={`/experience`}
                        >
                            <Button
                                key="header_menu_education"
                                onClick={handleCloseNavMenu}
                                sx={{my: 2, display: 'block'}}
                                color={location.pathname === "/experience" ? "secondary" : 'primary'}
                            >
                                {t("header_menu_experience")}                            </Button>
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