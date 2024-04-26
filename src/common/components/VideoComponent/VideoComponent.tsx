import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

export const VideoComponent = ({ videoUrl , title }: { videoUrl: string, title?: string }) => {

  const videoId = videoUrl.split('/').pop()?.split('?')[0]
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;

  return (
    <Box p={2}>
      {title && <Typography variant="h5" align="center" gutterBottom>
        {title}
      </Typography>}
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={8} md={6}>
          <Box sx={{position: 'relative', overflow: 'hidden', maxWidth: '700px', minHeight: '300px' }}>
            <iframe
              width="100%"
              height="100%"
              src={embedUrl}
              allow="autoplay; encrypted-media"
              allowFullScreen
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            ></iframe>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
