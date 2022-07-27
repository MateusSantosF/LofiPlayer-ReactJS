
import { Box } from "@mui/system";
import { memo } from "react";
function SongCard({cover}){

    return(
        <Box sx={{
            borderRadius:'50%',
            width:'250px', 
            height:'250px',
            justifyContent:'center', 
            backgroundImage: 'url(' + cover+')',
            backgroundSize:'cover',
            padding:'0',
            margin:'0'
            }}>                
        </Box>

    )
}

export default memo(SongCard)