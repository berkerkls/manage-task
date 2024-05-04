import { BaseService } from "./common/base-service";

export class TasksService extends BaseService {
  constructor() {
    super("tasks");
  }
  GetTasks() {
    return this.client.Get(`${this.baseUrl}`);
  }
  GetTasksById(id: string) {
    return this.client.Get(`${this.baseUrl}/${id}`);
  }
  GetSingleTasks() {
    return this.client.Get(`${this.baseUrl}/singleTasks`);
  }
  GetRoadmaps() {
    return this.client.Get(`${this.baseUrl}/roadmaps`);
  }
  CreateTask(command: Object) {
    return this.client.Post(`${this.baseUrl}`, command);
  }
  UpdateTask(id: string, command: Object) {
    return this.client.Put(`${this.baseUrl}/${id}`, command);
  }
  DeleteTask(id: string) {
    return this.client.Delete(`${this.baseUrl}/${id}`);
  }
  CompleteTasks(command: Object) {
    return this.client.Put(`${this.baseUrl}/CompleteTasks`, command);
  }
}
