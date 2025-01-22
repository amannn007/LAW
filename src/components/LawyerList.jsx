import { Card, CardContent, Typography, Button, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const LawyerList = () => {
  const { firmId } = useParams();
  const navigate = useNavigate();

  const firm = useSelector((state) =>
    state.appointments.firms.find((firm) => firm.id === parseInt(firmId))
  );

  const handleScheduleAppointment = (lawyerId) => {
    navigate(`/firm/${firmId}/lawyer/${lawyerId}/schedule`);
  };

  const handleViewAppointmentHistory = (lawyerId) => {
    navigate(`/firm/${firmId}/lawyer/${lawyerId}/history`);
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        {firm?.name}
      </Typography>
      <Grid container spacing={3}>
        {firm?.lawyers.map((lawyer) => (
          <Grid item size={{ xs: 12, sm: 6, md: 4 }} key={lawyer.id}>
            <Card
              elevation={3}
              sx={{
                backgroundColor: "#f4f5f2",
                borderRadius: 5,
              }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography variant="h6" gutterBottom>
                  {lawyer.name}
                </Typography>
                <Typography variant="body1" color="textSecondary" gutterBottom>
                  {lawyer.specialty}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Cost per Appointment: ${lawyer.costPerAppointment}
                </Typography>
                <Box sx={{ mt: 2 }}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleScheduleAppointment(lawyer.id)}
                    fullWidth
                    sx={{ mb: 1, backgroundColor: "#507687", borderRadius: 3 }}
                  >
                    Schedule Appointment
                  </Button>
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={() => handleViewAppointmentHistory(lawyer.id)}
                    fullWidth
                    sx={{
                      borderRadius: 3,
                    }}
                  >
                    Appointment History
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default LawyerList;
