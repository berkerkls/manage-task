import { BaseService } from "./common/base-service";

export class TasksService extends BaseService {
  constructor() {
    super("tasks");
  }
  GetTasks(data: any) {
    return this.client.Get(`${this.baseUrl}/tasks`);
  }
  GetTasksById(id: string) {
    return this.client.Get(`${this.baseUrl}/tasks/${id}`);
  }
  GetSingleTasks(id: string) {
    return this.client.Get(`${this.baseUrl}/singleTasks`);
  }
  GetRoadmaps(id: string) {
    return this.client.Get(`${this.baseUrl}/roadmaps`);
  }
  CreateTask(command: any) {
    return this.client.Post(`${this.baseUrl}/tasks`, command);
  }
  UpdateTask(id: string, command: any) {
    return this.client.Put(`${this.baseUrl}/tasks/${id}`, command);
  }
  DeleteTask(id: string) {
    return this.client.Delete(`${this.baseUrl}/tasks/${id}`);
  }
}
