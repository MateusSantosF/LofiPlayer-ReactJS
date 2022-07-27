import { Link, Typography } from "@mui/material"


function Footer(){
    return(
    <footer>
        <Typography sx={{textAlign:'center', padding:'1em'}}>
            Made with ❤️️ by{" "}
            <Link href="https://github.com/MateusSantosF/" underline="none">
                Mateus
            </Link>
        </Typography>
       
    </footer>
    )
}

export default Footer