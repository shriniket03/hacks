import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";
import { Button } from "@mui/material";

const CoinForm: React.FC = () => {
  const [coin, setCoin] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setCoin(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    console.log(`User has opted to review ${coin} data`);
  };

  return (
    <Box sx={{ marginTop: 5 }}>
      <form onSubmit={handleSubmit}>
        <FormControl fullWidth>
          <InputLabel id="label">Coin</InputLabel>
          <Select
            labelId="label-id"
            id="selector label"
            value={coin}
            label="Coin"
            sx={{ outlineColor: "white", background: "white", color: "black" }}
            onChange={handleChange}
          >
            <MenuItem value={"BTC"}>BTC</MenuItem>
            <MenuItem value={"XRPL"}>XRPL</MenuItem>
            <MenuItem value={"DOGE"}>DOGE</MenuItem>
          </Select>
        </FormControl>
        <Button type="submit" variant="contained" sx={{marginTop:5}}>Filter</Button>
      </form>
    </Box>
  );
};

export default CoinForm;
