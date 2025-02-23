import { useState } from "react";
import axios from "axios";
import useLogin from "./useLogin";

interface RegisterForm {
  firstName: string;
  lastName: string;
  nationalId: string;
  dateOfBirth: string;
  gender: string;
  maritalStatus: string;
  phoneNumber: string;
  email: string;
  province: string;
  msType: string;
  mobilityLevel: string;
  familyHistoryOfMs: string;
  walkingBalanceStatus: string;
  sleepStatus: string;
  stressLevel: string;
  employmentStatus: string;
  preferredContactMethod: string;
  agreementToTerms: boolean;
  currentMedications: string;
  password: string;
}

interface ApiResponse {
  success?: boolean;
  errors?: Record<string, string[]>;
}

const useRegister = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Record<string, string[]> | null>(null);
  const [success, setSuccess] = useState<boolean | null>(null);

  // Get login function from useLogin
  const { loginUser } = useLogin();

  const registerUser = async (formData: RegisterForm) => {
    setLoading(true);
    setError(null);
    setSuccess(null);

    const mappedData = {
      first_name: formData.firstName,
      last_name: formData.lastName,
      national_id: formData.nationalId,
      date_of_birth: formData.dateOfBirth,
      gender: formData.gender,
      marital_status: formData.maritalStatus,
      phone_number: formData.phoneNumber,
      email: formData.email,
      province: formData.province,
      ms_type: formData.msType,
      mobility_level: formData.mobilityLevel,
      family_history_of_ms: formData.familyHistoryOfMs,
      walking_balance_status: formData.walkingBalanceStatus,
      sleep_status: formData.sleepStatus,
      stress_level: formData.stressLevel,
      employment_status: formData.employmentStatus,
      preferred_contact_method: formData.preferredContactMethod,
      agreement_to_terms: formData.agreementToTerms,
      current_medications: formData.currentMedications,
      password: formData.password,
    };

    try {
      const { data } = await axios.post<ApiResponse>(
        "http://localhost:8000/api/patients/",
        mappedData
      );
      console.log("register responseee: ", mappedData);

      setSuccess(true);
      const loginresponse = await loginUser({
        email: formData.email,
        password: formData.password,
      });
      console.log("loginResponseee: ", loginresponse);
    } catch (error: any) {
      setError(
        error.response?.data?.errors || {
          general: ["Something went wrong. Please try again."],
        }
      );
    } finally {
      setLoading(false);
    }
  };

  return { registerUser, loading, error, success };
};

export default useRegister;
