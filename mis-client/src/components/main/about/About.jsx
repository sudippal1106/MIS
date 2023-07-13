import React from "react";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { Container } from "@mui/material";

const About = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#E8EAEA",
        paddingTop: 50,
      }}
    >
      <Stack direction="row" spacing={10}>
        <Card
          raised
          sx={{
            width: 300,
            height: 250,
            display: "flex",
            alignItems: "center",
          }}
          onClick={() => {
            navigate("/dynatrace/managementzone/set/monitoring");
          }}
        >
          <CardActionArea style={{ width: 300, height: 250 }}>
            <CardContent>
              <Typography
                variant="h5"
                component="div"
                color="#245EA8"
                textAlign="center"
              >
                Application <br />{" "}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Department
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card
          raised
          sx={{ width: 300, height: 250 }}
          onClick={() => {
            navigate("/dynatrace/managementzone/delete/monitoring");
          }}
        >
          <CardActionArea sx={{ width: 300, height: 250 }}>
            <CardContent>
              <Typography
                variant="h5"
                color={"#245EA8"}
                component="div"
                textAlign="center"
              >
                Database <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                Department
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card
          raised
          sx={{ width: 300, height: 250 }}
          onClick={() => {
            navigate("/dynatrace/managementzone/update/monitoring");
          }}
        >
          <CardActionArea sx={{ width: 300, height: 250 }}>
            <CardContent>
              <Typography
                variant="h5"
                color={"#245EA8"}
                component="div"
                textAlign="center"
              >
                Manegerial <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Department
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Stack>
    </div>
  );
};

export default About;
