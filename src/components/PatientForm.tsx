import React, { useState } from "react";
import {
  TextField,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Checkbox,
  FormControlLabel,
  Button,
  Grid,
  Container,
  Typography,
  Divider,
  InputAdornment,
  useTheme,
} from "@mui/material";

import {
  Person,
  Email,
  Phone,
  Cake,
  MedicalInformation,
} from "@mui/icons-material";
import { SelectChangeEvent } from "@mui/material";

const PatientForm: React.FC = () => {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    nationalId: "",
    dateOfBirth: "",
    gender: "",
    maritalStatus: "",
    phoneNumber: "",
    email: "",
    province: "",
    msType: "",
    currentMedications: "",
    mobilityLevel: "",
    familyHistoryOfMs: false,
    nutritionStatus: "",
    physicalActivityLevel: "",
    sleepStatus: "",
    stressLevel: "",
    employmentStatus: "",
    job: "",
    supportStatus: "",
    preferredContactMethod: "",
    agreementToTerms: false,
  });

  const handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | SelectChangeEvent<string>
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.checked });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          color: theme.palette.primary.main,
          fontWeight: "bold",
          textAlign: "center",
          mb: 4,
        }}
      >
        فرم ثبت نام بیمار
      </Typography>

      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          {/* Personal Information Section */}
          <Grid item xs={12}>
            <Typography
              variant="h6"
              sx={{
                color: theme.palette.text.secondary,
                mb: 2,
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Person fontSize="small" />
              اطلاعات شخصی
            </Typography>
            <Divider />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="نام"
              name="firstName"
              variant="outlined"
              InputProps={{
                sx: { borderRadius: 2 },
              }}
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="نام خانوادگی"
              name="lastName"
              variant="outlined"
              InputProps={{
                sx: { borderRadius: 2 },
              }}
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              type="date"
              name="dateOfBirth"
              label="تاریخ تولد"
              InputLabelProps={{ shrink: true }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Cake color="action" />
                  </InputAdornment>
                ),
                sx: { borderRadius: 2 },
              }}
              value={formData.dateOfBirth}
              onChange={handleChange}
              required
            />
          </Grid>

          {/* Contact Information Section */}
          <Grid item xs={12} mt={4}>
            <Typography
              variant="h6"
              sx={{
                color: theme.palette.text.secondary,
                mb: 2,
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Email fontSize="small" />
              اطلاعات تماس
            </Typography>
            <Divider />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="شماره تلفن"
              name="phoneNumber"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Phone color="action" />
                  </InputAdornment>
                ),
                sx: { borderRadius: 2 },
              }}
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="ایمیل"
              name="email"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email color="action" />
                  </InputAdornment>
                ),
                sx: { borderRadius: 2 },
              }}
              helperText="example@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Grid>

          {/* Medical Information Section */}
          <Grid item xs={12} mt={4}>
            <Typography
              variant="h6"
              sx={{
                color: theme.palette.text.secondary,
                mb: 2,
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <MedicalInformation fontSize="small" />
              اطلاعات پزشکی
            </Typography>
            <Divider />
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>نوع MS</InputLabel>
              <Select
                name="msType"
                value={formData.msType}
                onChange={handleChange}
                required
                sx={{ borderRadius: 2 }}
              >
                <MenuItem value="relapsing-remitting">
                  عودکننده-فروکش‌کننده
                </MenuItem>
                <MenuItem value="secondary-progressive">
                  پیش‌رونده ثانویه
                </MenuItem>
                <MenuItem value="primary-progressive">پیش‌رونده اولیه</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="دارو های مورد استفاده فعلی"
              name="currentMedications"
              value={formData.currentMedications}
              onChange={handleChange}
              multiline
              rows={3}
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2,
                  "&:hover fieldset": {
                    borderColor: theme.palette.primary.main,
                  },
                },
              }}
            />
          </Grid>

          {/* Agreement and Submit Section */}
          <Grid item xs={12} mt={2}>
            <FormControlLabel
              control={
                <Checkbox
                  name="agreementToTerms"
                  checked={formData.agreementToTerms}
                  onChange={handleCheckboxChange}
                  color="primary"
                  sx={{
                    "&.Mui-checked": { color: theme.palette.primary.main },
                  }}
                />
              }
              label="با شرایط و ضوابط موافقم"
              sx={{ "& .MuiFormControlLabel-label": { fontWeight: 500 } }}
            />
          </Grid>

          <Grid item xs={12} sx={{ textAlign: "center", mt: 4 }}>
            <Button
              type="submit"
              variant="contained"
              size="large"
              sx={{
                px: 6,
                borderRadius: 2,
                fontWeight: "bold",
                textTransform: "none",
                "&:hover": {
                  transform: "translateY(-2px)",
                  transition: "transform 0.2s",
                },
              }}
              disabled={!formData.agreementToTerms}
            >
              تایید ثبت نام{" "}
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default PatientForm;
