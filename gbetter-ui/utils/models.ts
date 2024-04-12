import { TaskTypeEnum } from "./enums";

export class CreateTaskCommand {
  constructor() {
    this.title = "";
    this.description = "";
    this.taskType = 0;
    this.startDate = "";
    this.endDate = "";
  }

  title: string;
  description: string;
  taskType: TaskTypeEnum;
  startDate: string;
  endDate: string;
}
