import React, { useEffect, useState } from "react";
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
  Box,
} from "@mui/material";

import {
  Person,
  Email,
  Phone,
  Cake,
  MedicalInformation,
} from "@mui/icons-material";
import { SelectChangeEvent } from "@mui/material";
import useRegister from "../../hooks/useRegister";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const PatientForm: React.FC = () => {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    nationalId: "",
    password: "",
    dateOfBirth: "",
    gender: "",
    maritalStatus: "",
    phoneNumber: "",
    email: "",
    province: "",
    msType: "",
    mobilityLevel: "",
    familyHistoryOfMs: "",
    walkingBalanceStatus: "",
    sleepStatus: "",
    stressLevel: "",
    employmentStatus: "",
    preferredContactMethod: "",
    currentMedications: "",
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

  const { registerUser } = useRegister();

  const handleSubmit = (event: React.FormEvent) => {
    console.log(formData);
    event.preventDefault();
    registerUser(formData);
  };

  const navigate = useNavigate();
  const { token } = useAuth();

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token, navigate]);

  return (
    !token && (
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Box sx={{ overflow: "hidden" }}>
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
          <FormControl onSubmit={handleSubmit}>
            <Grid container spacing={3}>
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
                  variant="standard"
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
                  variant="standard"
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
                  label="شماره ملی"
                  name="nationalId"
                  variant="standard"
                  value={formData.nationalId}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="رمز عبور"
                  name="password"
                  variant="standard"
                  value={formData.password}
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
                  variant="standard"
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
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth variant="standard">
                  <InputLabel>جنسیت</InputLabel>
                  <Select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    required
                  >
                    <MenuItem value="male">مرد</MenuItem>
                    <MenuItem value="female">زن</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth variant="standard">
                  <InputLabel>وضعیت تاهل</InputLabel>
                  <Select
                    name="maritalStatus"
                    value={formData.maritalStatus}
                    onChange={handleChange}
                    required
                  >
                    <MenuItem value="single">مجرد</MenuItem>
                    <MenuItem value="married">متاهل</MenuItem>
                    <MenuItem value="divorced">طلاق گرفته</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

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
                  variant="standard"
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
                  variant="standard"
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
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="استان محل سکونت"
                  name="province"
                  variant="standard"
                  InputProps={{ sx: { borderRadius: 2 } }}
                  value={formData.province}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth variant="standard">
                  <InputLabel>کدام روش ارتباط را ترجیح میدهید؟</InputLabel>
                  <Select
                    name="preferredContactMethod"
                    value={formData.preferredContactMethod}
                    onChange={handleChange}
                    required
                    sx={{ borderRadius: 2 }}
                  >
                    <MenuItem value="sms">پیامک</MenuItem>
                    <MenuItem value="email">ایمیل</MenuItem>
                    <MenuItem value="phone">تماس تلفنی</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

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
                <FormControl fullWidth variant="standard">
                  <InputLabel>نوع MS</InputLabel>
                  <Select
                    name="msType"
                    value={formData.msType}
                    onChange={handleChange}
                    required
                    sx={{ borderRadius: 2 }}
                  >
                    <MenuItem value="rrms">عودکننده-فروکش‌کننده</MenuItem>
                    <MenuItem value="ppms">پیش‌رونده اولیه</MenuItem>
                    <MenuItem value="spms">پیش‌رونده ثانویه</MenuItem>
                    <MenuItem value="prms">پیش رونده عود کننده</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormControl fullWidth variant="standard">
                  <InputLabel>سابقه خانوادگی ام اس</InputLabel>
                  <Select
                    name="familyHistoryOfMs"
                    value={formData.familyHistoryOfMs}
                    onChange={handleChange}
                    sx={{ borderRadius: 2 }}
                    required
                  >
                    <MenuItem value="yes">بله</MenuItem>
                    <MenuItem value="no">خیر</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth variant="standard">
                  <InputLabel>سطح تحرک بدن</InputLabel>
                  <Select
                    name="mobilityLevel"
                    value={formData.mobilityLevel}
                    onChange={handleChange}
                    sx={{ borderRadius: 2 }}
                    required
                  >
                    <MenuItem value="independent">مستقل</MenuItem>
                    <MenuItem value="wheelchair">صندلی چرخدار</MenuItem>
                    <MenuItem value="walking_aid">نیازمند وسیله کمکی</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="نحوه راه رفتن و تعادل"
                  name="walkingBalanceStatus"
                  variant="standard"
                  multiline
                  rows={2}
                  value={formData.walkingBalanceStatus}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="وضعیت خواب"
                  name="sleepStatus"
                  variant="standard"
                  multiline
                  rows={2}
                  value={formData.sleepStatus}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="سطح استرس بدن"
                  name="stressLevel"
                  variant="standard"
                  multiline
                  rows={2}
                  value={formData.stressLevel}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="دارو هایی که در حال حاضر استفاده می کنید"
                  name="currentMedications"
                  variant="standard"
                  multiline
                  rows={2}
                  value={formData.currentMedications}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="شغل"
                  name="employmentStatus"
                  variant="standard"
                  value={formData.employmentStatus}
                  onChange={handleChange}
                  required
                />
              </Grid>

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
                  label="اینجانب از درستی و صحت موارد فوق اطمینان دارم."
                  sx={{ "& .MuiFormControlLabel-label": { fontWeight: 500 } }}
                />
              </Grid>

              <Grid item xs={12} sx={{ textAlign: "center", mt: 4 }}>
                <Button
                  onClick={handleSubmit}
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
          </FormControl>
        </Box>
      </Container>
    )
  );
};

export default PatientForm;
