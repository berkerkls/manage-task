import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faKey, faUser } from "@fortawesome/free-solid-svg-icons";

export const signupFormInputs = [
    {
      icon: faUser,
      key: "fullName",
      value: "",
      placeholder: "* Name",
      labelName: "Name",
      type: "text",
      isRequired: true,
      isValid: false,
      class: "grow",
    },
    {
      icon: faEnvelope,
      key: "email",
      value: "",
      placeholder: "Email",
      labelName: "Email",
      type: "text",
      isRequired: true,
      isValid: false,
      class: "grow",
    },
    {
      icon: faKey,
      key: "password",
      value: "",
      placeholder: "Password",
      labelName: "Password",
      type: "password",
      isRequired: true,
      isValid: false,
      class: "grow",
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
      isValid: false,
      class: "grow",
    },
    {
      icon: faKey,
      key: "password",
      value: "",
      placeholder: "Password",
      labelName: "Password",
      type: "password",
      isRequired: true,
      isValid: false,
      class: "grow",
    },
  ];