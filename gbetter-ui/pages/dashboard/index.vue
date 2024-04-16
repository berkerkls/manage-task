<template>
  <div class="card w-full h-full bg-base-100 shadow-xl p-10">
    <div class="card-title flex">
      <progress
        class="progress progress-primary w-3/4 m-4"
        :value="isNaN(taskStore.progressValue) ? 0 : taskStore.progressValue"
        max="100"
      ></progress>
      <span class="font-light w-1/4"
        >{{
          !isNaN(taskStore.progressValue) && !taskStore.loading
            ? `%${taskStore.progressValue} of your tasks completed`
            : !taskStore.loading
            ? "No task added yet"
            : ""
        }}
        <FontAwesome
          v-if="!isNaN(taskStore.progressValue) && !taskStore.loading"
          :icon="faCheck"
          class="text-[#53a653] ml-4"
      /></span>
    </div>
    <div
      class="flex flex-col lg:flex-row justify-center overflow-y-auto min-h-96 max-h-96"
    >
      <StatsCard class="w-full lg:w-1/4" />
      <div class="w-3/4 overflow-auto p-6">
        <div
          v-if="taskStore.loading"
          class="flex justify-center items-center h-full"
        >
          <span class="loading loading-spinner text-primary loading-lg"></span>
        </div>
        <div
          v-if="!taskStore.loading && !taskStore.allTasks.length"
          role="alert"
          class="alert shadow-lg bg-accent"
        >
          <FontAwesome :icon="faInfoCircle" clas="h-3 w-3" />
          <div>
            <h3 class="font-medium">You have not added a task yet.</h3>
          </div>
          <button
            @click="
              () => {
                isOpen = true;
              }
            "
            class="btn btn-sm btn-primary text-white"
          >
            Let's Add!
          </button>
        </div>
        <table
          v-if="taskStore.allTasks.length && !taskStore.loading"
          class="table"
        >
          <thead>
            <tr>
              <th>
                <label>
                  <input
                    @click="
                      () =>
                        taskStore.allTasks.map(
                          (item) => (item.isSelected = !item.isSelected)
                        )
                    "
                    type="checkbox"
                    class="checkbox"
                  />
                </label>
              </th>
              <th>Title</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>
                <div class="flex justify-between items-center w-2/3">
                  <button
                    @click="() => (isOpen = !isOpen)"
                    class="btn btn-square btn-outline border-primary hover:bg-transparent hover:border-primary justify-self-start"
                  >
                    <FontAwesome class="text-primary" :icon="faPlus" />
                  </button>
                  <button
                    @click="taskStore.completeTasks()"
                    v-if="taskStore.allTasks.some((item) => item.isSelected)"
                    class="btn btn-square btn-outline border-[#53a653] hover:bg-transparent hover:border-green-500"
                  >
                    <FontAwesome class="text-[#53a653]" :icon="faCheck" />
                  </button>
                </div>
              </th>
            </tr>
          </thead>
          <tbody class="overflow-y-auto min-h-96 max-h-96">
            <!-- rows -->
            <TaskTable
              v-for="(item, index) in taskStore.allTasks"
              :id="item._id"
              :key="item._id"
              :title="item.title"
              :taskType="item.taskType"
              :startDate="
                item.startDate.substring(0, item.startDate.indexOf('T'))
              "
              :endDate="item.endDate.substring(0, item.endDate.indexOf('T'))"
              :isCompleted="item.isCompleted"
              :isSelected="item.isSelected"
              @isSelected="
                (value) => (taskStore.allTasks[index].isSelected = value)
              "
              @deleteTask="(value) => taskStore.deleteSingleTask(value)"
            />
          </tbody>
        </table>
        <DialogsCreateTask
          v-if="isOpen"
          @closeDialog="(value) => (isOpen = value)"
          @getTasks="taskStore.getAllTasks()"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useTaskStore } from "../../stores/taskStore";
import {
  faInfoCircle,
  faCheck,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
definePageMeta({
  layout: "default",
});
let isOpen = ref(false);
const taskStore = useTaskStore();

onMounted(() => {
  taskStore.getAllTasks();
});
</script>
