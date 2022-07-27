
import './Slider.modules.css'
import ReactSlider from 'react-slider'
import { Box } from '@mui/material'
import { PlayerContext } from '../../Contexts/PlayerContext'
import { useContext } from 'react'

function Slider({colors}){

    const {currentTime} = useContext(PlayerContext);
    
    return (
        <Box sx={{display:'flex', justifyContent:'center'}}>
            <ReactSlider                 
                className="horizontal-slider"
                trackClassName="track"
                renderThumb={() =>
                     <div className='thumb' style={{
                        width:currentTime+'%',              
                        backgroundImage:`linear-gradient(to right, ${colors[0]}, ${colors[1]})`
                     }}>
                    </div>
                }
            />
            
        </Box>
    )

}

export default Slider