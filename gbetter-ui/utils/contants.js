import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faHome,
  faKey,
  faUser,
  faBookOpen,
} from "@fortawesome/free-solid-svg-icons";
import { TaskTypeEnum } from "./enums";

export const signupFormInputs = [
  {
    icon: faUser,
    key: "name",
    value: "",
    placeholder: "Name",
    labelName: "Name",
    type: "text",
    isRequired: true,
    isValid: true,
    errorMessage: "",
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
    errorMessage: "",
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
    errorMessage: "",
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
    href: "/kanban",
    label: "Kanban",
    icon: faBookOpen,
  },
];

export const createTaskElements = [
  {
    key: "title",
    class: "p-4",
    value: "",
    placeholder: "Title",
    labelName: "Title",
    type: "text",
    isRequired: true,
    isValid: true,
  },

  {
    key: "taskType",
    class: "p-4",
    value: "",
    placeholder: "Task Type",
    labelName: "Task Type",
    type: "select",
    itemValues: TaskTypeEnum,
    isRequired: true,
    isValid: true,
  },
  {
    key: "startDate",
    class: "p-4",
    value: "",
    placeholder: "Start Date",
    labelName: "Start Date",
    type: "date",
    isRequired: true,
    isValid: true,
  },
  {
    key: "endDate",
    class: "p-4",
    value: "",
    placeholder: "End Date",
    labelName: "End Date",
    type: "date",
    isRequired: true,
    isValid: true,
  },
  {
    key: "description",
    value: "",
    class: "p-4",
    placeholder: "Description",
    labelName: "Description",
    type: "textarea",
    isRequired: false,
    isValid: true,
  },
];

export const KanbanColumns = [
  {
    title: "Waiting",
    column: "waiting",
    headingColor: "text-primary",
  },
  {
    title: "In progress",
    column: "inprogress",
    headingColor: "text-primary",
  },
];
