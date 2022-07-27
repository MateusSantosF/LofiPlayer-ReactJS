import { createContext } from "react";
import chillHop from "../playlist";

export const PlayerContext = createContext()


function PlayerContextProvider({children}){
    
    const playlist = chillHop();
    
    return(
        <PlayerContext.Provider value={{
            playlist
        }}>
        {children}
        </PlayerContext.Provider>
    )
}

export default PlayerContextProvider