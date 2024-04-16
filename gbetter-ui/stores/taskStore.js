import { defineStore } from "pinia";
import { TasksService } from "~/services/tasks-service";

export const useTaskStore = defineStore({
  id: "task-store",
  state: () => {
    return {
      allTasks: [],
      loading: true,
      totalTask: "",
      progressValue: "",
      tasksOpenedThisWeek: "",
      tasksDoneThisWeek: "",
      remainingTasks: "",
    };
  },
  actions: {
    setAllStats(allTasks) {
      this.totalTask = allTasks.length;
      this.progressValue = (
        (allTasks.filter((item) => item.isCompleted).length / allTasks.length) *
        100
      ).toFixed(0);
      this.tasksOpenedThisWeek = allTasks.filter(
        (item) =>
          new Date(item.createdAt) >=
          new Date().setDate(new Date().getDate() - 7)
      ).length;
      this.tasksDoneThisWeek = allTasks.filter(
        (item) =>
          new Date(item.createdAt) >=
            new Date().setDate(new Date().getDate() - 7) && item.isCompleted
      ).length;
      this.remainingTasks = allTasks.filter((item) => !item.isCompleted).length;
    },
    getAllTasks() {
      const taskService = new TasksService();
      this.loading = true;
      taskService.GetTasks().then((res) => {
        if (res.success) {
          this.allTasks = res.items;
          this.loading = false;
          this.setAllStats(this.allTasks);
        }
      });
    },
    deleteSingleTask(id) {
      const taskService = new TasksService();
      taskService.DeleteTask(id).then((res) => {
        if (res.success) {
          this.getAllTasks();
        }
      });
    },
    completeTasks() {
      const taskService = new TasksService();
      let command = {
        taskIds: [],
      };
      this.allTasks.map((item) =>
        item.isSelected ? command.taskIds.push(item._id) : null
      );
      taskService.CompleteTasks(command).then((res) => {
        if (res.success) {
          this.getAllTasks();
        }
      });
    },
  },
});
