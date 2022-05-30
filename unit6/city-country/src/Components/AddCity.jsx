import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
export const AddCity = () => {
  const [data, setData] = useState([]);
  const [n, setN] = useState("");
  const getList = async () => {
    try {
      let res = await fetch("http://localhost:8080/countries");
      let data = await res.json();
      setData(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getList();
  }, []);
  const handleChange = (e) => {
      setN(e.target.value)
  };
  return (
    <div>
      <TextField type="text" placeholder="Add new city"></TextField>
      <TextField type="text" placeholder="City population"></TextField>
      <Box sx={{ width: "200px" }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Population</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Age"
            value={n}
            onChange={handleChange}
          >
            {data.map((e) => (
              <MenuItem value={e.name} key={e.id}>
                {e.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Button variant="contained" endIcon={<SendIcon />}>
        Submit
      </Button>
    </div>
  );
};
// {data.map((e) => (
//     <MenuItem value={e.country} key={e.id}>{e.name}</MenuItem>
//   ))}
