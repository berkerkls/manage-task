import { defineStore } from "pinia";

export const useTaskStore = defineStore({
  id: "task-store",
  state: () => {
    return {
      totalTask: "",
      progressValue: "",
      tasksOpenedThisWeek: "",
      tasksDoneThisWeek: "",
      remainingTasks: "",
    };
  },
  actions: {
    setAllStats(allTasks) {
      console.log(allTasks);
      this.totalTask = allTasks.length;
      this.progressValue = (
        (allTasks.filter((item) => item.isCompleted).length / allTasks.length) *
        100
      ).toFixed(1);
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
  },
});
