import {
  Card,
  CardContent,
  Typography,
  Box,
  Divider,
  IconButton,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import dayjs from "dayjs";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteAppointment } from "../store/slice";

const AppointmentHistory = () => {
  const { firmId, lawyerId } = useParams();
  const dispatch = useDispatch();

  const firm = useSelector((state) =>
    state.appointments.firms.find((firm) => firm.id === parseInt(firmId))
  );

  const lawyer = firm?.lawyers.find(
    (lawyer) => lawyer.id === parseInt(lawyerId)
  );

  const appointments = lawyer.appointments;
  const currentTime = dayjs();

  const handleDeleteAppointment = (date, index) => {
    dispatch(
      deleteAppointment({
        firmId: parseInt(firmId),
        lawyerId: parseInt(lawyerId),
        date,
        index,
      })
    );
  };

  return (
    <Box sx={{ ml: 4, mt: 4 }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{ color: "primary.main", fontWeight: "bold" }}
      >
        Appointment History for {lawyer.name}
      </Typography>

      {Object.keys(appointments).length > 0 ? (
        Object.keys(appointments).map((date) => (
          <Box key={date} sx={{ mb: 4, pl: 2, borderLeft: "4px solid #1976d2" }}>
            <Typography
              variant="h5"
              sx={{ my: 2, color: "text.primary", fontStyle: "italic" }}
            >
              {date}
            </Typography>
            <Divider sx={{ mb: 2, borderColor: "#1976d2" }} />

            {appointments[date].map((appointment, index) => {
              const startTime = dayjs(
                `${date} ${appointment.time}`,
                "YYYY-MM-DD HH:mm"
              );
              const endTime = startTime.add(30, "minute").format("HH:mm");
              const isFutureAppointment = startTime.isAfter(currentTime);

              return (
                <Box
                  key={index}
                  sx={{
                    position: "relative",
                    mb: 4,
                    p: 2,
                    backgroundColor: "background.paper",
                    borderRadius: 2,
                    boxShadow: 1,
                  }}
                >
                  <Card
                    sx={{
                      mb: 0.5,
                      p: 2,
                      position: "relative",
                      width: "100%",
                      maxWidth: { xs: "80%", sm: "50%", md: "40%" },
                      borderRadius: 5,
                      display: "flex",
                      flexDirection: "column",
                      backgroundColor: isFutureAppointment
                        ? "#e8f5e9"
                        : "#fbe9e7",
                    }}
                    elevation={3}
                  >
                    <CardContent>
                      {isFutureAppointment && (
                        <Box
                          sx={{
                            position: "absolute",
                            top: 8,
                            right: 8,
                          }}
                        >
                          <IconButton
                            onClick={() => handleDeleteAppointment(date, index)}
                            size="small"
                            aria-label="delete appointment"
                          >
                            <DeleteIcon sx={{ color: "error.main" }} />
                          </IconButton>
                        </Box>
                      )}
                      <Typography
                        variant="body1"
                        gutterBottom
                        sx={{ fontWeight: "medium", color: "text.primary" }}
                      >
                        {appointment.time} - {endTime}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        sx={{ mt: 1 }}
                      >
                        {appointment.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Box>
              );
            })}
          </Box>
        ))
      ) : (
        <Typography
          variant="body1"
          sx={{
            mt: 2,
            color: "text.secondary",
            textAlign: "center",
            fontStyle: "italic",
          }}
        >
          No appointment history available
        </Typography>
      )}
    </Box>
  );
};

export default AppointmentHistory;
