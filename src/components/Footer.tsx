import React from "react";
import { Paper, Box, IconButton, Typography } from "@mui/material";
import { Facebook, Instagram, LinkedIn } from "@mui/icons-material";

export default function Footer(){
    return(
        <Paper
        component="footer"
        elevation={4}
        sx={{
            py: 2,
            backgroundColor: "primary.main",
        }}
        >
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", px: { xs: 2, sm: 3 } }}>
                {/*Name*/}
                <Typography color="text.primary">
                © 2025 Markuss Auseklis
                </Typography>

                {/*Icons*/}
                <Box sx={{ display: "flex", gap: 2 }}>
                <IconButton sx={{ "&:hover": { backgroundColor: "primary.dark" }, color: "text.primary" }} href="https://facebook.com" target="_blank">
                    <Facebook />
                </IconButton>
                <IconButton sx={{ "&:hover": { backgroundColor: "primary.dark" }, color: "text.primary" }} href="https://linkedin.com" target="_blank">
                    <LinkedIn />
                </IconButton>
                <IconButton sx={{ "&:hover": { backgroundColor: "primary.dark" }, color: "text.primary" }} href="https://instagram.com" target="_blank">
                    <Instagram />
                </IconButton>
                </Box>
            </Box>
        </Paper>
    );
}