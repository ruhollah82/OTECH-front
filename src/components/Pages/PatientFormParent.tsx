import { Box } from "@mui/material";
import PatientForm from "./PatientForm";
import theme from "../../theme";

const PatientFormParent = () => {
  return (
    <Box sx={{ bgcolor: theme.palette.background.default }}>
      <PatientForm />
    </Box>
  );
};

export default PatientFormParent;
