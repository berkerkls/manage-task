import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faKey, faUser } from "@fortawesome/free-solid-svg-icons";
import { errorMessages } from "vue/compiler-sfc";

export const signupFormInputs = [
    {
      icon: faUser,
      key: "fullName",
      value: "",
      placeholder: "Name",
      labelName: "Name",
      type: "text",
      isRequired: true,
      isValid: true,
      errorMessage:'',
    },
    {
      icon: faEnvelope,
      key: "email",
      value: "",
      placeholder: "Email",
      labelName: "Email",
      type: "text",
      isRequired: true,
      isValid: true,
      errorMessage:'',
    },
    {
      icon: faKey,
      key: "password",
      value: "",
      placeholder: "Password",
      labelName: "Password",
      type: "password",
      isRequired: true,
      isValid: true,
      errorMessage:'',
    },
  ];


  export const loginFormInputs = [
    {
      icon: faEnvelope,
      key: "email",
      value: "",
      placeholder: "Email",
      labelName: "Email",
      type: "text",
      isRequired: true,
      isValid: true,
      checkValid:(value) => this.isValid = value, 
      errorMessage:'',
    },
    {
      icon: faKey,
      key: "password",
      value: "",
      placeholder: "Password",
      labelName: "Password",
      type: "password",
      isRequired: true,
      isValid: true,
      errorMessage: ''
    },
  ];

