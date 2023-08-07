import React, { useState } from 'react';
import './App.css';
import styled from 'styled-components';
import { ThemeProvider, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateField } from '@mui/x-date-pickers/DateField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import PublishIcon from '@mui/icons-material/Publish';
import SaveAsIcon from '@mui/icons-material/SaveAs';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { StudentNames } from './Students';
import services from './Services';
import { durations } from './Durations';
import { doctors, supers, locations } from './Doctors';


const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const ColumnContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

`;

const Padder = styled.div`
 padding: 0 50px;
 border: 1px solid black;

`;


const Transcription = styled.div`
margin-right: 500px

`;
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


function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

function App() {
  const theme = useTheme();
  const [personName, setPersonName] = useState([]);
  const [serviceType, setServiceType] = useState([]);
  const [Durationer, setDurationer]= useState([]);
  const [Doctorine, setDoctorine]= useState([]);
  const [Super, setSuper]= useState([]);
  const [Location, setLocation]= useState([]);
  const [Status, setStatus]= useState([]);
  const [Individuals, setIndividuals]= useState([]);
  const [Provided, setProvided]= useState([]);



  const [studentNames, setstudentNames] = useState(StudentNames);
  console.log(StudentNames)


  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === 'string' ? value.split(',') : value);
  };

  const handleChangeServiceType = (event) => {
    setServiceType(event.target.value);
  };

   const handleProvided = (event) => {
    setProvided(event.target.value);
  };
  

  const handleIndividuals = (event) => {
    setIndividuals(event.target.value);
  };
  
  const handleDurationer = (event) => {
    setDurationer(event.target.value);
  };
  const handleStatus = (event) => {
    setStatus(event.target.value);
  };
  
  const handleDoctor = (event) => {
    setDoctorine(event.target.value);
  };
  const handleLocations = (event) => {
    setLocation(event.target.value);
  };
  

    const handleSuper = (event) => {
    setSuper(event.target.value);
  };
  
  const [age, setAge] = React.useState('');

  const handleChange34 = (event) => {
    setAge(event.target.value);
  };




  return (

    
    <Padder>
      
<Container> 
<h2>Session Note</h2>
<div> 
<Button variant="contained" size="small">
<PublishIcon />
        </Button>

        <Button variant="contained" size="small">
        <SaveAsIcon />
        </Button>
        <Button variant="contained" size="small">
          <LocalPrintshopIcon/>
        </Button>
        <Button variant="contained" size="small">
        <ArrowBackIcon/>
        </Button>       
</div>
</Container>

<Container>

     <div>

        <h3>Student Name</h3>

        <FormControl sx={{ m: 1, width: 300 }}>
  <InputLabel id="demo-multiple-name-label">Select</InputLabel>
  <Select
    labelId="demo-multiple-name-label"
    id="demo-multiple-name"
    value={personName}
    onChange={handleChange}
    input={<OutlinedInput label="Select" />}
    MenuProps={MenuProps}
  >
    {studentNames.map((name) => (
      <MenuItem
        key={name.student_id}
        value={name.student_id} // Use student_id as the selected value
        style={getStyles(name.student_id, personName, theme)} // Adjust getStyles accordingly
      >
        {name.student_fname} {name.student_lname}
      </MenuItem>
    ))}
  </Select>
</FormControl>


</div>
<div>
        <h3>NYS ID</h3>

        <TextField id="filled-basic" label="" variant="filled" />
      

        </div>
<div>
        <h3>Service Type</h3>

        <FormControl sx={{ m: 1, width: 300 }}>
  <InputLabel id="demo-multiple-name-label">Select</InputLabel>
  <Select
    labelId="demo-multiple-name-label"
    id="demo-multiple-name"
    value={serviceType}
    onChange={handleChangeServiceType}
    input={<OutlinedInput label="Select" />}
    MenuProps={MenuProps}
  >
    {services.map((name) => (
      <MenuItem key={name.id} value={name.name}>
        {name.name}
      </MenuItem>
    ))}
  </Select>
</FormControl>

        </div>
        <div>
        <h3>Date</h3>


           
           
        <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateField']}>
        <DateField label="" />
      </DemoContainer>
    </LocalizationProvider>

        </div>

        <div>  
             <h3>Start Time</h3>


    <TextField id="outlined-basic" label="" variant="outlined" />
        
          </div>
      
<div>

        <h3>Duration</h3>
        <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-autowidth-label"></InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={Durationer}
          onChange={handleDurationer}
          autoWidth
          label=""
        >
         {durations.map((name) => (
      <MenuItem
        key={name.id}
        value={name.name} // Use student_id as the selected value
      >
        {name.name}
      </MenuItem>
    ))}
        </Select>
      </FormControl>
        </div>
        <div>
        <h3>Clincian</h3>


  
      <FormControl sx={{ m: 1, minWidth: 300 }}>
        <InputLabel id="demo-simple-select-autowidth-label"></InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={Doctorine}
          onChange={handleDoctor}
          autoWidth
          label=""
        >
            {doctors.map((name) => (
      <MenuItem
        key={name.id}
        value={name.name} // Use student_id as the selected value
      >
        {name.name}
      </MenuItem>
    ))}
        </Select>
      </FormControl>


      </div>

      </Container>

      <ColumnContainer>
<div>

<h3>Supervisor</h3>



<FormControl sx={{ m: 1, minWidth: 300 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Select</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={Super}
          onChange={handleSuper}
          autoWidth
          label=""
        >
            {supers.map((name) => (
      <MenuItem
        key={name.id}
        value={name.name} // Use student_id as the selected value
      >
        {name.name}
      </MenuItem>
    ))}
        </Select>
      </FormControl>
</div>

<div>

<h3>Status</h3>
<FormControl sx={{ m: 1, minWidth: 150 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Provided</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={Status}
          onChange={handleStatus}
          autoWidth
          label=""
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Complete</MenuItem>
          <MenuItem value={21}>Incomplete</MenuItem>
        </Select>
      </FormControl>

</div>
   </ColumnContainer>

    

    

 <ColumnContainer>


 <FormControl sx={{ m: 1, minWidth: 150 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Individual</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={Individuals}
          onChange={handleIndividuals}
          autoWidth
          label=""
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Luffy</MenuItem>
          <MenuItem value={21}>Zoro</MenuItem>

        </Select>
      </FormControl>
      
      <FormControl sx={{ m: 1, minWidth: 150 }}>
        <InputLabel id="demo-simple-select-autowidth-label"></InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={age}
          onChange={handleChange34}
          autoWidth
          label=""
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Twenty</MenuItem>
          <MenuItem value={21}>Twenty one</MenuItem>
          <MenuItem value={22}>Twenty one and a half</MenuItem>
        </Select>
      </FormControl>
  
      <FormControl sx={{ m: 1, minWidth: 110 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Location</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={Location}
          onChange={handleLocations}
          autoWidth
          label=""
        >
               {locations.map((name) => (
      <MenuItem
        key={name.id}
        value={name.name} // Use student_id as the selected value
      >
        {name.name}
      </MenuItem>
    ))}
        </Select>
      </FormControl>

      <FormControl sx={{ m: 1, minWidth: 110 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Provided</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={Provided}
          onChange={handleProvided}
          autoWidth
          label=""
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Yes</MenuItem>
          <MenuItem value={21}>No</MenuItem>
 
        </Select>
      </FormControl>

      <FormGroup>
        <FormControlLabel control={<Checkbox />} label="Telehealth" />
      </FormGroup>
      <FormGroup>
        <FormControlLabel control={<Checkbox />} label="Is Makeup" />
      </FormGroup>

      <Transcription>
        <FormControlLabel control={<Checkbox />} label="Transcription" />
      </Transcription>
 </ColumnContainer>

    </Padder>
  );
}

export default App;
