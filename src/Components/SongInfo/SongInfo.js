
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

function SongInfo({title, artist}){
    
    return(
        <Box sx={{display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center', paddingTop:'0.5em'}}>
            <Typography variant='h4'>
                {title}
            </Typography>
            <Typography variant='overline'>
                {artist}
            </Typography>
        </Box>
    )

}

export default SongInfo