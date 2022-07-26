import { Box,IconButton  } from '@mui/material';
import {AppContext} from '../../Contexts/AppContext'
import { useContext } from 'react';
import { Drawer } from "@mui/material";
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

function Library(){

    const {toggleLibraryOpen, isLibraryOpen} = useContext(AppContext)

    return(
        <> 
        {isLibraryOpen &&
    
            <Drawer open={isLibraryOpen} onClose={toggleLibraryOpen} >
                <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center', minWidth:'35vw', padding:'1em'}}>
                    <Box>
                        <h2>Library</h2>
                    </Box>
                    <Box>
                    <IconButton aria-label="close" size="large" color="primary" onClick={toggleLibraryOpen} >
                        <CancelOutlinedIcon />
                    </IconButton>
                    </Box>
                </Box>
          </Drawer>                  
        }
        </>
    )
}

export default Library