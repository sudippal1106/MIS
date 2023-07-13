import React ,{ useState,useEffect}from "react";
import "./home.css";

import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import { useNavigate }  from 'react-router-dom';


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

// useEffect(()=>{
//   fetch("http://localhost:7000/api/vi/employeetasks").then((data)=>data.json()).then((val)=>setValues(val))
// },[])

// const names = [
//  ' HR ',
//  ' Applications',
//  ' Case Management',
//   'Commissions',
//  ' Life Settlement',
//  ' Licensing & Contracting',
//   'US Calling Team',
//   'Special Project',
//  ' Mortgage'
  
// ];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}


export default function Home() {

  const [values,setValues]=useState([]);
  useEffect(()=>{

    const getcategory=async()=>{
      const res= await fetch('http://localhost:7000/api/employeetasks');
      const getdata = await res.json();
      setValues(getdata);
      console.log(getdata);
    }
    getcategory();
  },[])
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);
  const navigate = useNavigate();



  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const handleNextClick = () => {
    if (personName.includes('Task1')) {
      navigate('/application'); 
    }
  
  };

  return (
    <main>
    <div className="intro">
    <h1>Welcome to EPR MIS System</h1>
    </div>
    <div>
   
      <FormControl sx={{ m: 1, width: 300,mt:5,ml:80 }}>
        <InputLabel id="demo-multiple-name-label">MIS</InputLabel>
        <Select
                value={personName}
                onChange={handleChange}
             
                input={<OutlinedInput />}
                MenuProps={MenuProps}
              >
                {values.map((e) => (
                  <MenuItem
                    key={e.TaskId}
                    value={e.Name}
                    style={getStyles(e.Name, personName, theme)}
                  >
                    {e.Name}
                  </MenuItem>
                ))}
              </Select>

        <Button className ="button" sx={{mt:4}} variant="contained" onClick={handleNextClick} >NEXT</Button>
      </FormControl>
    </div>
    </main>
  );
}