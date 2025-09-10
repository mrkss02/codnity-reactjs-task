import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";

const pages = ["Home", "About", "Gallery"];

export default function Header(){

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
    );

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return(
        <AppBar position="sticky" color="primary">
            <Toolbar sx = {{justifyContent: "space-between"}}>
                {/* Logo */}
                <Typography variant="h6" sx={{ fontWeight: 700, letterSpacing: ".2rem" }}>
                Codnity Task
                </Typography>

                {/* Mobile */}
                <Box sx={{ display: { xs: "flex", sm: "none" } }}>
                <IconButton onClick={handleOpenNavMenu} color="inherit">
                    <MenuIcon />
                </IconButton>
                <Menu
                    anchorEl={anchorElNav}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    PaperProps={{
                    sx: { backgroundColor: "primary.main", color: "primary.contrastText" },
                    }}
                >
                    {pages.map((page) => (
                    <MenuItem
                        key={page}
                        component={Link}
                        to={page === "Home" ? "/" : `/${page.toLowerCase()}`}
                        onClick={handleCloseNavMenu}
                        sx={{
                        "&:hover": { backgroundColor: "primary.dark" },
                        mx: "0.5rem",
                        px: "1rem",
                        borderRadius: 0.8
                        }}
                    >
                        <Typography fontSize= "0.9rem" textTransform="uppercase">{page}</Typography>
                    </MenuItem>
                    ))}
                </Menu>
                </Box>

                {/* Desktop */}
                <Box sx={{ display: { xs: "none", sm: "flex" } }}>
                {pages.map((page) => (
                    <Button
                    key={page}
                    component={Link}
                    to={page === "Home" ? "/" : `/${page.toLowerCase()}`}
                    sx={{ color: "primary.contrastText", "&:hover": { backgroundColor: "primary.dark" } }}
                    >
                    {page}
                    </Button>
                ))}
                </Box>
            </Toolbar>
        </AppBar>
    );
}