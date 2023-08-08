import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Formik, Field } from "formik";
import bgadetailService from "../../../../services/bgadetail.service";
import * as Yup from "yup";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MUISnackbar from "../../../common/snackbar/Snackbar";
import EmployeeTaskService from "../../../../services/employeetask.service";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

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

// validation
const validationSchema = Yup.object().shape({
  DataEntry: Yup.number().required("Data Entry is required."),
  Niagoscrub: Yup.number().required("Niagoscrub is required."),
  Examordering: Yup.number().required("Examordering is required."),
  Doctyping: Yup.number().required("Doctyping is required."),
  Apsscrubbing: Yup.number().required("Apsscrubbing is required."),
  Carrierscrub: Yup.number().required("Carrierscrub is required."),
  // Submission: Yup.number().required("Submission is required."),
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
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

//initial value
const initialRow = {
  DataEntry: 0,
  Niagoscrub: 0,
  Examordering: 0,
  Doctyping: 0,
  Apsscrubbing: 0,
  Carrierscrub: 0,
  // Submission: 0,
};

export default function App() {
  //snakbar
  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const [alertMsg, setAlertMsg] = React.useState(null);
  const [severity, setSeverity] = React.useState(null);
  const [xposition, setXposition] = React.useState("");
  const [yposition, setYposition] = React.useState("");

  const [rows, setRows] = useState([]);
  const [newRows, setNewRows] = useState([]);
  const [values, setValues] = useState([]);
  const [open, setOpen] = useState(false);
  const [isAddBgaClicked, setIsAddBgaClicked] = useState(false);
  const [personName, setPersonName] = React.useState([]);
  const [clientId, setClientId] = React.useState(null);
  const [employeeTaskDetails, setEmployeeTaskDetails] = React.useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getcategory = async () => {
      const res = await fetch("http://localhost:7000/api/clientdetails");
      const getdata = await res.json();
      setValues(getdata);
      console.log(getdata);
    };
    getcategory();
  }, []);

  //get employee task's details
  React.useEffect(() => {
    const getEmployeeTaskDetails = () => {
      EmployeeTaskService.getTaskDetails()
        .then((res) => {
          console.log("response is ", res.data);
          setEmployeeTaskDetails(res.data);
        })
        .catch((err) => {
          console.log("error occured to fetch the data", err);
        });
    };
    getEmployeeTaskDetails();
  }, []);

  const theme = useTheme();

  //submit
  const handleSubmit = (values) => {
    console.log("helloo1", values);
    console.log("client is", personName);
    bgadetailService
      .createBga(values)
      .then((res) => {
        console.log("status is ", res.data);
        setAlertMsg("BGA Successfully Added");
        setSeverity("success");
        setOpenSnackbar(true);
        setXposition("center");
        setYposition("top");
      })
      .catch((err) => {
        console.log(err.response.data.message);
        setAlertMsg("Something Went Wrong! Failed to Add BGA");
        setSeverity("error");
        setOpenSnackbar(true);
        setXposition("center");
        setYposition("top");
        setOpen(true);
      });
  };

  const calculateTotalTime = (data) => {
    let totalTime = 0;
    employeeTaskDetails.forEach((el) => {
      for (let item in data) {
        if (item === el.Name) {
          totalTime += el.Duration * data[item];
        }
      }
    });
    return totalTime;
  };
  const handleAddRow = (values) => {
    values.ClientID = clientId;
    let SubmissionTime = calculateTotalTime(values);
    values.Submission = SubmissionTime;
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

  const handleChangeClient = (e) => {
    setClientId(e.target.value);
  };

  const handleOpen = () => {
    console.log("client name is", clientId);
    setIsAddBgaClicked(true);
    setOpen(true);
  };

  const handleClose = () => {
    setOpenSnackbar(false);
  };

  return (
    <div>
      <MUISnackbar
        open={openSnackbar}
        handleClose={handleClose}
        alertMsg={alertMsg}
        severity={severity}
        xposition={xposition}
        yposition={yposition}
      />

      <div style={{ display: "flex", justifyContent: "right" }}>
        <div>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              navigate("/application/dashboard");
            }}
          >
            Report & Dashboard
          </Button>
        </div>
      </div>

      <div
        style={{
          border: "1px solid red",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div>
          <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel id="demo-multiple-name-label">BGA</InputLabel>
            <Select
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              value={clientId}
              onChange={handleChangeClient}
              input={<OutlinedInput label="Name" />}
              MenuProps={MenuProps}
            >
              {values.map((e) => (
                <MenuItem
                  key={e.ClientID}
                  value={e.ClientID}
                  style={getStyles(e.Name, personName, theme)}
                >
                  {e.Name}
                </MenuItem>
              ))}
            </Select>
            <Button
              sx={{ m: 1, width: 200, height: 52, mt: -6.8, ml: 40 }}
              variant="contained"
              onClick={handleOpen}
            >
              <b>Add Data</b>
            </Button>
          </FormControl>
        </div>
      </div>

      {isAddBgaClicked && (
        <Formik
          initialValues={initialRow}
          onSubmit={handleAddRow}
          validationSchema={validationSchema}
        >
          {({ values, handleChange, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <TableContainer sx={{ ml: 8, maxWidth: 1400, tableborder: 10 }}>
                <Table
                  sx={{ Width: 650, mt: 10 }}
                  aria-label="customized table"
                >
                  <TableHead>
                    <TableRow>
                      <StyledTableCell align="center" required>
                        Data Entry
                      </StyledTableCell>
                      <StyledTableCell align="center" required>
                        Niago Scrub
                      </StyledTableCell>
                      <StyledTableCell align="center" required>
                        Exam Ordering
                      </StyledTableCell>
                      <StyledTableCell align="center" required>
                        Doctyping
                      </StyledTableCell>
                      <StyledTableCell align="center" required>
                        Aps Scrubbing
                      </StyledTableCell>
                      <StyledTableCell align="center" required>
                        Carrier Scrub
                      </StyledTableCell>
                      {/* <StyledTableCell align="center" required>
                        Submission
                      </StyledTableCell> */}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <StyledTableRow>
                      <StyledTableCell component="th" scope="row">
                        <Field
                          as={TextField}
                          name="DataEntry"
                          value={values.DataEntry}
                          onChange={handleChange}
                        />
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        <Field
                          as={TextField}
                          name="Niagoscrub"
                          value={values.Niagoscrub}
                          onChange={handleChange}
                        />
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        <Field
                          as={TextField}
                          name="Examordering"
                          value={values.Examordering}
                          onChange={handleChange}
                        />
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        <Field
                          as={TextField}
                          name="Doctyping"
                          value={values.Doctyping}
                          onChange={handleChange}
                        />
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        <Field
                          as={TextField}
                          name="Apsscrubbing"
                          value={values.Apsscrubbing}
                          onChange={handleChange}
                        />
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        <Field
                          as={TextField}
                          name="Carrierscrub"
                          value={values.Carrierscrub}
                          onChange={handleChange}
                        />
                      </StyledTableCell>
                      {/* <StyledTableCell align="right">
                        <Field
                          as={TextField}
                          name="Submission"
                          value={values.Submission}
                          onChange={handleChange}
                        />
                      </StyledTableCell> */}
                    </StyledTableRow>
                  </TableBody>
                </Table>
              </TableContainer>
              <Button
                variant="contained"
                sx={{ ml: 80, mt: 5 }}
                color="primary"
                type="submit"
              >
                Add
              </Button>
            </form>
          )}
        </Formik>
      )}
      {newRows.length > 0 && (
        <div>
          <TableContainer sx={{ ml: 8, maxWidth: 1400, mt: 10 }}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="center">ClientName</StyledTableCell>
                  <StyledTableCell align="center">Data Entry</StyledTableCell>
                  <StyledTableCell align="center">Niago Scrub</StyledTableCell>
                  <StyledTableCell align="center">
                    Exam Ordering
                  </StyledTableCell>
                  <StyledTableCell align="center">Doctyping</StyledTableCell>
                  <StyledTableCell align="center">
                    Aps Scrubbing
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    Carrier Scrub
                  </StyledTableCell>

                  <StyledTableCell align="center">
                    Submission(min)
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {newRows.map((row, index) => (
                  <StyledTableRow key={index}>
                    <StyledTableCell align="center">
                      {values.find((el) => el.ClientID === row.ClientID).Name}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.DataEntry}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.Niagoscrub}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.Examordering}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.Doctyping}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.Apsscrubbing}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.Carrierscrub}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.Submission}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Button
            variant="contained"
            sx={{ ml: 80, mt: 5 }}
            type="submit"
            color="primary"
            onClick={() => {
              handleSubmit(newRows);
            }}
          >
            Submit
          </Button>
        </div>
      )}
    </div>
  );
}
