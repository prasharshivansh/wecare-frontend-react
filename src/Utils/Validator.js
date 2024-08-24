export const coachValidator = (name) => {
  switch (name) {
    case "name":
      return "Name should have minimum 3 and maximum 50 characters";
    case "password":
      return "Password should have minimum 5 and maximum 10 characters";
    case "dateOfBirth":
      return "Age should be greater than 20 and less than 100";
    case "gender":
      return "Gender should be either M or F";
    case "mobileNumber":
      return "Mobile Number should have 10 digits";
    case "speciality":
      return "Specialty should have 10 to 50 characters";
    default:
      return null;
  }
};

export const userValidator = (name) => {
  switch (name) {
    case "name":
      return "Name should have minimum 3 and maximum 50 characters";
    case "password":
      return "Password should have minimum 5 and maximum 10 characters";
    case "dateOfBirth":
      return "Age should be greater than 20 and less than 100";
    case "gender":
      return "Gender should be either M or F";
    case "mobileNumber":
      return "Mobile Number should have 10 digits";
    case "email":
      return "Email field is required";
    case "pincode":
      return "Pincode should have 6 digits";
    case "city":
      return "City should have 6 to 20 digits";
    case "state":
      return "State should have 6 to 20 digits";
    case "country":
      return "Country should have 6 to 20 digits";
    default:
      return null;
  }
};

export function ValidateSpeciality(spec) {
  return spec.length >= 10 && spec.length <= 50;
}
export function ValidateName(name) {
  const userNameRegex = new RegExp(/^[a-zA-Z\s'-]{3,50}$/);
  return userNameRegex.test(name);
}
export function ValidatePassword(password) {
  const passwordRegex = new RegExp(/^.{5,10}$/);
  return passwordRegex.test(password);
}
export function ValidateAge(dateOfBirth) {
  if (dateOfBirth === "") return false;
  const today = new Date();
  const birthDate = new Date(dateOfBirth);
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }
  return age > 20 && age < 100;
}
export function ValidateGender(gender) {
  return gender.length > 0;
}

export function ValidatePhoneNumber(phoneNumber) {
  return phoneNumber.toString().length === 10;
}
export function ValidateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function ValidatePinCode(pinCode) {
  return pinCode.toString().length === 6;
}

export function ValidateAddress(address) {
  return address.length >= 3 && address.length <= 20;
}
