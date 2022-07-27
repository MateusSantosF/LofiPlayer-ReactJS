import * as React from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Typography from '@mui/material/Typography';

function LibraryCard({music}){


    return(
      <Card sx={{ marginBottom:'1em' }}>
        <CardActionArea sx={{ display: 'flex', width:'100%', justifyContent:'left'}}>
        <CardMedia
            component="img"
            sx={{ width: 120 }}
            image={music.cover}
            alt="Live from space album cover"
        />
        <Box sx={{ display: 'flex', flexDirection: 'column'}}>
          <CardContent sx={{display: 'flex', flexDirection: 'column', justifyContent:'center'}}>
            <Typography component="div" variant="h5">
              {music.name}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
              {music.artist}
            </Typography>
          </CardContent>
        </Box>
      </CardActionArea>
    </Card>
  )
}

export default LibraryCard