import { Box , IconButton, Slider} from "@mui/material";

import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import PauseRoundedIcon from '@mui/icons-material/PauseRounded';

import SkipPreviousRoundedIcon from '@mui/icons-material/SkipPreviousRounded';
import SkipNextRoundedIcon from '@mui/icons-material/SkipNextRounded';


import { PlayerContext } from "../../Contexts/PlayerContext";
import { useContext } from "react";


function PlayerControlls(){

    const {handlerSkipSong,handlerPreviousSong, isPlaying, handlerPlayPauseSong} = useContext(PlayerContext)

    return (
            <Box sx={{display:'flex', justifyContent:'space-around', paddingTop:'1em', flexDirection:"column", width:'35%'}}>
                <Slider
                    aria-label="musicTimer"
                    defaultValue={30}
                    color="secondary"
                />
                <Box sx={{display:'flex', justifyContent:'space-around'}}>
                    <IconButton aria-label="Previous" sx={{color:'black'}} onClick={handlerPreviousSong}>
                        <SkipPreviousRoundedIcon fontSize="large"/>
                    </IconButton>
                    <IconButton aria-label="Play/pause" sx={{color:'black'}} onClick={handlerPlayPauseSong}>
                       {isPlaying ?  <PauseRoundedIcon fontSize="large" /> :<PlayArrowRoundedIcon fontSize="large"/>  } 
                    </IconButton>
                    <IconButton aria-label="Next"  sx={{color:'black'}} onClick={handlerSkipSong}>
                        <SkipNextRoundedIcon fontSize="large" />
                    </IconButton>
                </Box>
                
            </Box>
    )
}

export default PlayerControlls;