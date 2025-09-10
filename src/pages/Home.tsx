import React, { useEffect, useState } from "react";
import { Box, Typography, Card, CardContent, CardMedia, Grid } from "@mui/material";

export default function Home() {
  const [post, setPost] = useState<{ title: string; body: string } | null>(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then(res => res.json())
      .then(data => setPost(data));
  }, []);

  if (!post) return null;

  const galleryImages: string[] = [];
  for (let i = 1; i <= 9; i++) {
    galleryImages.push(`https://picsum.photos/800/600?random=${i}`);
  }

  return (
    <Box sx={{ p: { xs: 2, md: 4 }, maxWidth: 1200, mx: "auto" }}>
      
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Typography variant="h3" sx={{ fontWeight: 700 }}>
          Welcome to Codnity Task
        </Typography>
        <Typography sx={{ mt: 2, color: "text.secondary" }}>
          Small site I am using to learn React and fulfill a task for a potential internship position
        </Typography>
      </Box>

      <Card sx={{ maxWidth: 1200, mx: "auto", mb: 6 }}>
        <CardMedia
          component="img"
          height="auto"
          image={`https://picsum.photos/1500/750?random=333`}
        />
        <CardContent>
          <Typography variant="h5" sx={{ mb: 1 }}>
            {post.title}
          </Typography>
          <Typography variant="body2">{post.body}</Typography>
        </CardContent>
      </Card>

      <Box>
        <Typography variant="h4" sx={{ mb: 2 }}>
          Gallery Preview
        </Typography>
        <Grid container spacing={{ xs: 2, sm: 3 }} columns={{ xs: 2, sm: 8, md: 12 }} justifyContent="center">
          {galleryImages.map((url, index) => (
            <Grid key={index} size={{ xs: 2, sm: 4, md: 4 }}>
              <Card>
                <CardMedia component="img" width="auto" height="auto" image={url} />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
