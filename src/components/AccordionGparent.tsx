import SpecialityGrid from "./SpecialityGrid";
import {
  HealthAndSafety, // Example MUI icon
  // Orthopedics, // Example MUI icon
  Vaccines, // Example MUI icon
  Medication, // Example MUI icon
} from "@mui/icons-material";

const ParentComponent = () => {
  const specialities = [
    {
      href: "/nephrology",
      icon: <HealthAndSafety sx={{ fontSize: 60, color: "#2B2A29" }} />,
      title: "Nephrology",
    },
    {
      href: "/orthopaedics",
      icon: <HealthAndSafety sx={{ fontSize: 60, color: "#2B2A29" }} />,
      title: "Orthopaedics",
    },
    {
      href: "/oncology",
      icon: <Vaccines sx={{ fontSize: 60, color: "#2B2A29" }} />,
      title: "Oncology",
    },
    {
      href: "/internal-medicine",
      icon: <Medication sx={{ fontSize: 60, color: "#2B2A29" }} />,
      title: "Internal Medicine",
    },
    {
      href: "/internal-medicine",
      icon: <Medication sx={{ fontSize: 60, color: "#2B2A29" }} />,
      title: "Internal Medicine",
    },
    {
      href: "/oncology",
      icon: <Vaccines sx={{ fontSize: 60, color: "#2B2A29" }} />,
      title: "Oncology",
    },
    {
      href: "/internal-medicine",
      icon: <Medication sx={{ fontSize: 60, color: "#2B2A29" }} />,
      title: "Internal Medicine",
    },
    {
      href: "/internal-medicine",
      icon: <Medication sx={{ fontSize: 60, color: "#2B2A29" }} />,
      title: "Internal Medicine",
    },
    {
      href: "/oncology",
      icon: <Vaccines sx={{ fontSize: 60, color: "#2B2A29" }} />,
      title: "Oncology",
    },
    {
      href: "/internal-medicine",
      icon: <Medication sx={{ fontSize: 60, color: "#2B2A29" }} />,
      title: "Internal Medicine",
    },
    {
      href: "/internal-medicine",
      icon: <Medication sx={{ fontSize: 60, color: "#2B2A29" }} />,
      title: "Internal Medicine",
    },
    {
      href: "/oncology",
      icon: <Vaccines sx={{ fontSize: 60, color: "#2B2A29" }} />,
      title: "Oncology",
    },
  ];

  return (
    <div>
      <SpecialityGrid specialities={specialities} />
    </div>
  );
};
export default ParentComponent;
