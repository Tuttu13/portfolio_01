import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";
import Drawer from "@mui/material/Drawer";

const setNavLinks: Array<{ text: string, url: string }> = [
    { text: "Top", url: "/" },
    { text: "Profile", url: "/profile" },
    { text: "Skill", url: "/skill" },
    { text: "Production", url: "/production" },
    { text: "Contact", url: "/contact" },
    { text: "Blog", url: "/blog" },
];

const Header: React.FC = () => {
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    }

    const handleDrawerClose = () => {
        setOpen(false);
    }

  return(
    <>
        <AppBar component="header" position="static">
            <Container maxWidth="md">
                <Box sx={{ display: 'flex', justifyContent: 'space-between'}}>
                    <Box>
                        <h1>test</h1>
                    </Box>
                    <Box>
                        <List component="nav" sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                            <ListItem disablePadding>
                                <ListItemButton onClick={handleDrawerOpen} sx={{ textAlign: 'center', display: { xs: 'block', md: 'none' } }}>
                                    <ListItemText primary={<MenuIcon />} />
                                </ListItemButton>
                            </ListItem>
                            { setNavLinks.map( (navLink) => (
                            <ListItem disablePadding>
                                <ListItemButton sx={{ textAlign: 'center', display: { xs: 'none', md: 'block' } }} component={Link} to={navLink.url}>
                                    <ListItemText primary={navLink.text} />
                                </ListItemButton>
                            </ListItem>
                            ))}
                        </List>
                    </Box>
                    <Drawer anchor="right" open={open} onClose={handleDrawerClose} PaperProps={{ style: { width: '100%' } }}>
                        <List component="nav" sx={{ display: 'block', justifyContent: 'normal' }}>
                            <ListItem disablePadding>
                                <ListItemButton onClick={handleDrawerClose} sx={{ textAlign: 'center', borderBottom: "solid 1px #696969" }}>
                                    <ListItemText primary={<CloseIcon />} />
                                </ListItemButton>
                            </ListItem>
                            { setNavLinks.map( (navLink) => (
                            <ListItem disablePadding>
                                <ListItemButton onClick={handleDrawerClose} sx={{ textAlign: 'center', borderBottom: "solid 1px #696969" }} component={Link} to={navLink.url}>
                                    <ListItemText primary={navLink.text} />
                                </ListItemButton>
                            </ListItem>
                            ))}
                        </List>
                    </Drawer>
                </Box>
            </Container>
        </AppBar>
    </>
  );
};

export default Header;