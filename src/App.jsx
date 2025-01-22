import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FirmList from "./components/FirmList";
import LawyerList from "./components/LawyerList";
import ScheduleAppointment from "./components/ScheduleAppointment";
import AppointmentHistory from "./components/AppointmentHistory";
import { Container, AppBar, Toolbar, Typography, Box } from "@mui/material";
import "./App.css";

function App() {
  return (
    <Router>
      <AppBar
        position="static"
        style={{
          backgroundColor: "#324A70", // Richer blue for header
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        }}
      >
        <Toolbar>
          <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1, color: "#fff", fontWeight: 600 }}
          >
            Lawyer Appointment Management
          </Typography>
        </Toolbar>
      </AppBar>
      <Container
        maxWidth="lg"
        style={{
          backgroundColor: "#f9f9f9",
          borderRadius: "8px",
          padding: "20px",
          marginTop: "20px",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Box
          sx={{
            my: 4,
            textAlign: "center",
            fontFamily: "Roboto, sans-serif",
            fontWeight: 400,
          }}
        >
          <Routes>
            <Route path="/" element={<FirmList />} />
            <Route path="/firm/:firmId/lawyers" element={<LawyerList />} />
            <Route
              path="/firm/:firmId/lawyer/:lawyerId/schedule"
              element={<ScheduleAppointment />}
            />
            <Route
              path="/firm/:firmId/lawyer/:lawyerId/history"
              element={<AppointmentHistory />}
            />
          </Routes>
        </Box>
      </Container>
    </Router>
  );
}

export default App;
