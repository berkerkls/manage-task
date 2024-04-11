import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faHome,faRoad, faKey, faUser,faBookOpen} from "@fortawesome/free-solid-svg-icons";

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
    },
  ];
  export const MenuItems = [
    {
      href: "/dashboard",
      label: "Dashboard",
      icon: faHome,
    },
    {
      href: "/single-tasks",
      label: "Single Tasks",
      icon: faBookOpen,
    },
    {
      href: "/roadmaps",
      label: "Roadmaps",
      icon: faRoad,
    },
  ];

