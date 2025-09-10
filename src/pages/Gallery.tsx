import React from "react";
import { Box, Card, CardMedia, Typography } from "@mui/material";

export default function Gallery() {
  const galleryImages: string[] = [];
  for (let i = 1; i <= 12; i++) {
    galleryImages.push(`https://picsum.photos/1400/900?random=${i}`);
  }

  return (
    <Box sx={{ p: { xs: 2, md: 4 }, maxWidth: 1400, mx: "auto" }}>
        {/* Title */}
        <Typography
            variant="h3"
            sx={{ fontWeight: 700, mb: 4, textAlign: "center" }}
        >
            Gallery
        </Typography>

        {/* Images */}
        {galleryImages.map((url, index) => (
            <Card key={index} sx={{ mb: 4 }}>
            <CardMedia component="img" image={url} />
            <Box sx={{ display: "flex", justifyContent: "space-between", p: 2 }}>
                <Typography variant="body1">Image {index + 1}</Typography>
                <Typography variant="body2">Author {index + 1}</Typography>
            </Box>
            </Card>
        ))}
    </Box>
  );
}