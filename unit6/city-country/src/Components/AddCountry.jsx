
import TextField from "@mui/material/TextField";
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
export const AddCountry =()=>{


    return(
        <div>
        <TextField type="text" placeholder="Add new country"/>
        <Button variant="contained" endIcon={<SendIcon />}>Submit</Button>
        </div>
    )
}

