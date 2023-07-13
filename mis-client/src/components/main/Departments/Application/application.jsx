import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Formik, Field } from 'formik';
import bgadetailService from '../../../../services/bgadetail.service';
import * as Yup from 'yup';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
// import Search from '../../common/search/search';
// import Stack from '@mui/material/Stack';

import { useEffect } from 'react';

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


const validationSchema = Yup.object().shape({
    dataentry: Yup.string().required('Data Entry is required.'),
    niagoscrub: Yup.string().required('Niagoscrub is required.'),
    examordering: Yup.string().required('Examordering is required.'),
    doctyping: Yup.string().required('Doctyping is required.'),
    apsscrubbing: Yup.string().required('Apsscrubbing is required.'),
    carrierscrub: Yup.string().required('Carrierscrub is required.'),
    submission: Yup.string().required('Submission is required.'),
  });
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const initialRow = {  dataentry: '',
niagoscrub: '',
examordering: '',
doctyping: '',
apsscrubbing: '',
carrierscrub: '',
submission: '', 
clientname:'',};

export default function App() {
  const [rows, setRows] = useState([]);
  const [newRows, setNewRows] = useState([]);
  const [alertMsg, setAlertMsg] = React.useState(null);
  
  const [values, setValues] = useState([]);
  const [open, setOpen] = useState(false);

  const [isAddBgaClicked, setIsAddBgaClicked] = useState(false);

  useEffect(() => {
    const getcategory = async () => {
      const res = await fetch('http://localhost:7000/api/clientdetails');
      const getdata = await res.json();
      setValues(getdata);
      console.log(getdata);
    }
    getcategory();
  }, [])

  const theme = useTheme();

  const [personName, setPersonName] = React.useState([]);
  const handleSubmit = (values) => {
    console.log("helloo1",values)

    bgadetailService.createBga(values)
      .then((res) => {
        console.log("helloo",values)
        setAlertMsg("BGA Successfully Added");
        // setSeverity("success");
        // setOpen(true);
      })
      .catch((err) => {
        console.log(err);
        setAlertMsg("Failed to Add The Contact");
        // setSeverity("error");
        // setOpen(true);
      });
    console.log("hello");
  };
  const handleAddRow = (values) => {
    setNewRows((prevRows) => [...prevRows, values]);
    setRows([]);
  };
  
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName((prevPersonName) => {
      if (prevPersonName.includes(value)) {
        return prevPersonName.filter((name) => name !== value);
      } else {
        return [...prevPersonName, value];
      }
    });
 };
 const handleOpen = () => {
    setIsAddBgaClicked(true);
    setOpen(true);

  };

  return (
    <div>
    <FormControl sx={{ m: 1, width: 300, mt: 5, ml: 73 }}>
        <InputLabel id="demo-multiple-name-label">BGA</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Name" />}
          MenuProps={MenuProps}
        >
          {values.map((e) => (
            <MenuItem
              key={e.ClientID}
              value={e.Name}
              style={getStyles(e.Name, personName, theme)}
            >
              {e.Name}
            </MenuItem>
          ))}
        </Select>
        <Button sx={{ m: 1, width: 200, height: 52, mt: -6.8, ml: 40 }} variant="contained" onClick={handleOpen} ><b>Add Data</b></Button>
      </FormControl>
      {isAddBgaClicked && (
      <Formik
        initialValues={initialRow}
        onSubmit={handleAddRow}
        validationSchema={validationSchema}
      >
        {({ values, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <TableContainer sx={{ ml:8 , maxWidth: 1400,tableborder:10 }} >
              <Table sx={{ Width: 650, mt: 10 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell align="center" required >Data Entry</StyledTableCell>
                    <StyledTableCell align="center" required>Niago Scrub</StyledTableCell>
                    <StyledTableCell align="center" required>Exam Ordering</StyledTableCell>
                    <StyledTableCell align="center" required>Doctyping</StyledTableCell>
                    <StyledTableCell align="center" required>Aps Scrubbing</StyledTableCell>
                    <StyledTableCell align="center" required>Carrier Scrub</StyledTableCell>
                    <StyledTableCell align="center" required>Submission</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <StyledTableRow>
                    <StyledTableCell component="th" scope="row">
                      <Field
                        as={TextField}
                        name="dataentry"
                        value={values.dataentry}
                        onChange={handleChange}
                      />
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      <Field
                        as={TextField}
                        name="niagoscrub"
                        value={values.niagoscrub}
                        onChange={handleChange}
                      />
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      <Field
                        as={TextField}
                        name="examordering"
                        value={values.examordering}
                        onChange={handleChange}
                      />
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      <Field
                        as={TextField}
                        name="doctyping"
                        value={values.doctyping}
                        onChange={handleChange}
                      />
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      <Field
                        as={TextField}
                        name="apsscrubbing"
                        value={values.apsscrubbing}
                        onChange={handleChange}
                      />
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      <Field
                        as={TextField}
                        name="carrierscrub"
                        value={values.carrierscrub}
                        onChange={handleChange}
                      />
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      <Field
                        as={TextField}
                        name="submission"
                        value={values.submission}
                        onChange={handleChange}
                      />
                    </StyledTableCell>
                  </StyledTableRow>
                </TableBody>
              </Table>
            </TableContainer>
            <Button variant="contained" sx={{ ml:80,mt:5 }} color="primary" type="submit">
              Add
            </Button>
          </form>
        )}
      </Formik>)}
      {newRows.length > 0 && (
        <div>
        <TableContainer  sx={{ ml:8 , maxWidth: 1400 ,mt:10 }}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow >
                <StyledTableCell align="center">Data Entry</StyledTableCell>
                <StyledTableCell align="center">Niago Scrub</StyledTableCell>
                <StyledTableCell align="center">Exam Ordering</StyledTableCell>
                <StyledTableCell align="center">Doctyping</StyledTableCell>
                <StyledTableCell align="center">Aps Scrubbing</StyledTableCell>
                <StyledTableCell align="center">Carrier Scrub</StyledTableCell>
                <StyledTableCell align="center">Submission</StyledTableCell>
                <StyledTableCell align="center">ClientName</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {newRows.map((row, index) => (
                <StyledTableRow key={index}>
                  <StyledTableCell  align="center">{row.dataentry}</StyledTableCell>
                  <StyledTableCell align="center">{row.niagoscrub}</StyledTableCell>
                  <StyledTableCell align="center">{row.examordering}</StyledTableCell>
                  <StyledTableCell align="center">{row.doctyping}</StyledTableCell>
                  <StyledTableCell align="center">{row.apsscrubbing}</StyledTableCell>
                  <StyledTableCell align="center">{row.carrierscrub}</StyledTableCell>
                  <StyledTableCell align="center">{row.submission}</StyledTableCell>
                  <StyledTableCell align="center">{row.clientname}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Button variant="contained" sx={{ ml:80,mt:5 }} type="submit" color="primary" onClick={handleSubmit}>
        Submit
      </Button>
      </div>
      )}
    </div>
  );
}
