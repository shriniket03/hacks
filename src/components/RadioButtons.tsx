import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

interface props {
  setType: React.Dispatch<React.SetStateAction<string>>
}

const RadioButtons: React.FC<props> = ({setType}: props) => {
    return (
      <FormControl>
        <FormLabel sx={{color:'white'}}><h2>Filter Data By</h2></FormLabel>
        <RadioGroup
          row
          aria-labelledby="GroupBy"
          name="radio-buttons-group"
        >
          <FormControlLabel value="Date" control={<Radio sx={{color:'white'}} onChange={()=>setType(`Date`)}/>} label="Date"/>
          <FormControlLabel value="Coin" control={<Radio sx={{color:'white'}} onChange={()=>setType(`Coin`)}/>} label="Coin" />
          <FormControlLabel value="Account" control={<Radio sx={{color:'white'}} onChange={()=>setType(`Account`)}/>} label="Account"/>
        </RadioGroup>
      </FormControl>
    );
}

export default RadioButtons