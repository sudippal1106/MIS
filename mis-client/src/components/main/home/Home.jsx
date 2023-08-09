import React, { useState, useEffect } from "react";
import "./home.css";
import departmentServices from "../../../services/department.service";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
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

export default function Home() {
  const [values, setValues] = useState([]);
  const [department, setDepartment] = React.useState([]);
  const [selectDepartment, setSelectDepartment] = React.useState(null);
  const theme = useTheme();
  const navigate = useNavigate();

  useEffect(() => {
    const getDepartment = async () => {
      try {
        const result = await departmentServices.getDepartments();
        setDepartment(result.data.data);
        console.log("response department", result.data);
      } catch (err) {
        console.log("error occured", err);
      }
    };
    getDepartment();
  }, []);

  const handleChange = (event) => {
    setSelectDepartment(event.target.value);
  };

  const handleNextClick = () => {
    if (selectDepartment === 1) {
      navigate("/hr");
    } else if (selectDepartment === 2) {
      navigate("/application");
    }
  };

  return (
    <main>
      <div className="intro">
        <h1>Welcome to EPR MIS System</h1>
      </div>
      <div>
        <FormControl sx={{ m: 1, width: 300, mt: 5, ml: 80 }}>
          <InputLabel id="demo-multiple-name-label">Choose Dept.</InputLabel>
          <Select
            labelId="demo-multiple-name-label"
            value={selectDepartment}
            onChange={handleChange}
            // input={<OutlinedInput />}
            MenuProps={MenuProps}
            label="Choose Dept."
          >
            {department?.map((e) => (
              <MenuItem
                key={e.DepartmentID}
                value={e.DepartmentID}
                // style={getStyles(e.Name, personName, theme)}
              >
                {e.Name}
              </MenuItem>
            ))}
          </Select>

          <Button
            className="button"
            sx={{ mt: 4 }}
            variant="contained"
            onClick={handleNextClick}
          >
            NEXT
          </Button>
        </FormControl>
      </div>
    </main>
  );
}
