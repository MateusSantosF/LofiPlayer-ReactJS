import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import SettingsSharpIcon from '@mui/icons-material/SettingsSharp';
import { Box,IconButton  } from '@mui/material';
import {AppContext} from '../../Contexts/AppContext'
import { useContext } from 'react';


function Navbar(){
    
    const {toggleLibraryOpen, toggleSettingsOpen} = useContext(AppContext)

    return(
        <Box sx={{display:'flex', justifyContent:'space-around', alignItems:'center'}}>
            <Box>
                <IconButton aria-label="libs" color="primary" onClick={toggleLibraryOpen} >
                    <ImportContactsIcon />
                </IconButton>
            </Box>
            <Box>
               <h2>MinPlayer</h2>
            </Box>
            <Box>
                <IconButton aria-label="configs"  color="primary" onClick={toggleSettingsOpen}>
                    <SettingsSharpIcon />
                </IconButton>
            </Box>          
        </Box>
        
    )
}

export default Navbar