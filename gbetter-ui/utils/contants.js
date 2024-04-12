import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faHome,faRoad, faKey, faUser,faBookOpen, faHeading, faPenSquare, faList,faCalendar} from "@fortawesome/free-solid-svg-icons";
import { TaskTypeEnum } from "./enums";

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

  export const createTaskElements = [
    {
      icon: faHeading,
      key: "title",
      class:"p-4",
      value: "",
      placeholder: "Title",
      labelName: "Title",
      type: "text",
      isRequired: true,
      isValid: true,
    },
   
    {
      icon: faList,
      key: "taskType",
      class:"p-4",
      value: "",
      placeholder: "Task Type",
      labelName: "Task Type",
      type: "select",
      itemValues: TaskTypeEnum,
      isRequired: true,
      isValid: true,
    },
    {
      icon: faCalendar,
      key: "startDate",
      class:"p-4",
      value: "",
      placeholder: "Start Date",
      labelName: "Start Date",
      type: "date",
      isRequired: true,
      isValid: true,
    },
    {
      icon: faCalendar,
      key: "endDate",
      class:"p-4",
      value: "",
      placeholder: "End Date",
      labelName: "End Date",
      type: "date",
      isRequired: true,
      isValid: true,
    },
    {
      icon: faPenSquare,
      key: "description",
      value: "",
      class:"p-4",
      placeholder: "Description",
      labelName: "Description",
      type: "textarea",
      isRequired: true,
      isValid: true,
    },
  ]

