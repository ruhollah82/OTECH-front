import PatientForm from "./PatientForm";
import { Box } from "@mui/material";

const PatientFormParent = () => {
  return (
    <div
      //   sx={{
      //     width: "100vw",
      //     display: "flex",
      //     alignItems: "center",
      //     justifyContent: "center",
      //     bgcolor: "#696969",
      //     margin: 0,
      //     padding: 0,
      //   }}
      style={{
        width: "100vw",
      }}
    >
      <PatientForm />
    </div>
  );
};

export default PatientFormParent;
