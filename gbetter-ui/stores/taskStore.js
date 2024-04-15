import { defineStore } from "pinia";

export const useAuthStore = defineStore({
  id: "auth-store",
  state: () => {
    return {
      totalTask: localStorage.getItem("totalTask") ?? 0,
      progressValue: localStorage.getItem("progressValue") ?? 0,
      tasksOpenedThisWeek: localStorage.getItem("tasksOpenedThisWeek") ?? 0,
      tasksDoneThisWeek: localStorage.getItem("tasksDoneThisWeek") ?? 0,
    };
  },
  actions: {
    setAllStats(allTasks) {
      this.totalTask = allTasks.length;
      localStorage.setItem("totalTask", this.totalTask);
      this.progressValue =
        (allTasks.value.filter((item) => item.isCompleted).length /
          allTasks.value.length) *
        100;
      localStorage.setItem("progressValue", this.progressValue);
      this.tasksOpenedThisWeek = allTasks.filter(
        (item) =>
          new Date(item.createdAt) >=
          new Date().setDate(new Date().getDate() - 7)
      ).length;
      localStorage.setItem("tasksOpenedThisWeek", this.tasksOpenedThisWeek);
      this.tasksDoneThisWeek = props.allTasks.filter(
        (item) =>
          new Date(item.createdAt) >=
            new Date().setDate(new Date().getDate() - 7) && item.isCompleted
      ).length;
      localStorage.setItem("tasksDoneThisWeek", this.tasksDoneThisWeek);
    },
  },
});
