import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import { Box,IconButton, Button, Typography  } from '@mui/material';
import {AppContext} from '../../Contexts/AppContext'
import { useContext } from 'react';

import AlbumRoundedIcon from '@mui/icons-material/AlbumRounded';
function Navbar(){
    
    const {toggleLibraryOpen} = useContext(AppContext)

    return(
        <Box sx={{display:'flex', justifyContent:'space-around', alignItems:'center'}}>       
            <Box sx={{display:'flex', alignItems:'center', padding:'2em'}}>
                <Typography variant="h5" component="h2">
                    Chill 
                    <AlbumRoundedIcon/>
                    MateusF
                </Typography>
     
            </Box>   
            <Box>     
                <Button  startIcon={<ImportContactsIcon />} sx={{color:'black', border:'1px solid black'}} onClick={toggleLibraryOpen}>
                    Library
                </Button>
            </Box>     
        </Box>
        
    )
}

export default Navbar