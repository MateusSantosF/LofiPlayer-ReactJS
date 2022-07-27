
import { PlayerContext } from "../../Contexts/PlayerContext";
import { useContext } from "react";
import PlayerControlls from "../PlayerControlls/PlayerControlls";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import SongCard from "../SongCard/SongCard";
import SongInfo from "../SongInfo/SongInfo";

function Player(){

    const {currentSong} = useContext(PlayerContext)

    return(   
        <Box sx={{ display:'flex',justifyContent:'center', alignItems:'center', flexDirection:'column'}}>       
            <SongCard cover={currentSong.cover}/>
            <SongInfo title={currentSong.name} artist={currentSong.artist}/>            
            <PlayerControlls/> 
        </Box>                  
    )

}

export default Player;