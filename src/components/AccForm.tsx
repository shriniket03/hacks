import { useState } from "react";
import { TextField,Button, Box, FormControl } from "@mui/material";

const AccForm: React.FC = () => {
  const [accName, setAccName] = useState("");
  function handleChange(event: React.ChangeEvent) {
    setAccName((event.target as HTMLInputElement).value);
  }
  function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
    console.log(`User has opted to review data belonging to the account ${accName}`)
  }
  return (
    <Box sx={{marginTop:5}}>
      <form onSubmit={handleSubmit}>
        <FormControl fullWidth>
        <TextField
          id="getName"
          label="Account Name"
          variant="outlined"
          value={accName}
          onChange={handleChange}
          sx={{backgroundColor:'white'}}
        />
        </FormControl>
        <Button type="submit" variant="contained" sx={{marginTop:5}}>Filter</Button>
      </form>
    </Box>
  );
};

export default AccForm;
