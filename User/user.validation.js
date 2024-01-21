import * as Yup from "yup";

import { GenderOptions, UserRoles } from "../constants/general.constant.js";

export let userSchema = Yup.object({
  firstName: Yup.string()
    .required("First name is required")
    .trim()
    .max(55, "first name must be at max 55 characters."),
  lastName: Yup.string()
    .required("Last name is required")
    .trim()
    .max(55, "last name must be at max 55 characters."),
  email: Yup.string()
    .email("Email must be valid.")
    .required("Email is required")
    .trim()
    .lowercase()
    .max(55, "email must be at max 55 characters."),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 6 characters.")
    .max(20, "Password must be at least 6 characters."),
  gender: Yup.string().oneOf(GenderOptions).trim(),
  dob: Yup.date(),
  role: Yup.string().oneOf(UserRoles).required("Role is required.").trim(),
});

export let loginUserSchema = Yup.object({
  email: Yup.string()
    .email("Must be  valid email.")
    .required("Email is required.")
    .trim()
    .lowercase(),
  password: Yup.string().required("Password is required."),
});
