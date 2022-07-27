import { Box , IconButton} from "@mui/material";

import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import PauseRoundedIcon from '@mui/icons-material/PauseRounded';

import SkipPreviousRoundedIcon from '@mui/icons-material/SkipPreviousRounded';
import SkipNextRoundedIcon from '@mui/icons-material/SkipNextRounded';


import { PlayerContext } from "../../Contexts/PlayerContext";
import { useContext, memo } from "react";
import Slider from "../Slider/Slider";


function PlayerControlls(){

    const {handlerSkipSong,handlerPreviousSong, isPlaying, handlerPlayPauseSong, currentSong} = useContext(PlayerContext)


    return (
            <Box sx={{display:'flex', justifyContent:'space-between', paddingTop:'1em', flexDirection:"column", width:'35%'}}>
                <Slider colors={currentSong.color}/>
                <Box sx={{display:'flex', justifyContent:'space-around'}}>
                    <IconButton aria-label="Previous" sx={{color:'black'}} onClick={handlerPreviousSong}>
                        <SkipPreviousRoundedIcon fontSize="large"/>
                    </IconButton>
                    <IconButton aria-label="Play/pause" sx={{color:'black'}} onClick={handlerPlayPauseSong}>
                        {isPlaying ? <PauseRoundedIcon fontSize="large" /> :<PlayArrowRoundedIcon fontSize="large"/>  } 
                    </IconButton>
                    <IconButton aria-label="Next"  sx={{color:'black'}} onClick={handlerSkipSong}>
                        <SkipNextRoundedIcon fontSize="large" />
                    </IconButton>
                </Box>
                
            </Box>
    )
}

export default memo(PlayerControlls);