import SpecialityGrid from "./SpecialityGrid";
import {
  HealthAndSafety,
  Psychology,
  MedicalServices,
  LocalHospital,
} from "@mui/icons-material";

const ParentComponent = () => {
  const specialities = [
    {
      href: "/cardiology",
      icon: <HealthAndSafety sx={{ fontSize: 60, color: "#2B2A29" }} />,
      title: "کاردیولوژی",
    },
    {
      href: "/psychology",
      icon: <Psychology sx={{ fontSize: 60, color: "#2B2A29" }} />,
      title: "روانشناسی",
    },
    {
      href: "/family-medicine",
      icon: <MedicalServices sx={{ fontSize: 60, color: "#2B2A29" }} />,
      title: "پزشکی خانواده",
    },
    {
      href: "/dentistry",
      icon: <LocalHospital sx={{ fontSize: 60, color: "#2B2A29" }} />,
      title: "دندانپزشکی",
    },
    {
      href: "/neurology",
      icon: <HealthAndSafety sx={{ fontSize: 60, color: "#2B2A29" }} />,
      title: "عصب‌شناسی",
    },
    {
      href: "/pediatrics",
      icon: <Psychology sx={{ fontSize: 60, color: "#2B2A29" }} />,
      title: "پزشکی اطفال",
    },
    {
      href: "/gastroenterology",
      icon: <MedicalServices sx={{ fontSize: 60, color: "#2B2A29" }} />,
      title: "گوارش",
    },
    {
      href: "/dermatology",
      icon: <LocalHospital sx={{ fontSize: 60, color: "#2B2A29" }} />,
      title: "پوست و مو",
    },
    {
      href: "/emergency-medicine",
      icon: <HealthAndSafety sx={{ fontSize: 60, color: "#2B2A29" }} />,
      title: "پزشکی اورژانس",
    },
    {
      href: "/allergy-immunology",
      icon: <Psychology sx={{ fontSize: 60, color: "#2B2A29" }} />,
      title: "آلرژی و ایمونولوژی",
    },
    {
      href: "/orthopedics",
      icon: <MedicalServices sx={{ fontSize: 60, color: "#2B2A29" }} />,
      title: "ارتوپدی",
    },
    {
      href: "/urology",
      icon: <LocalHospital sx={{ fontSize: 60, color: "#2B2A29" }} />,
      title: "ارولوژی",
    },
  ];

  return (
    <div>
      <SpecialityGrid specialities={specialities} />
    </div>
  );
};

export default ParentComponent;
