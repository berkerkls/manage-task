<template>
  <div class="card w-full h-full bg-base-100 shadow-xl p-10">
    <div class="card-title flex">
      <progress
        class="progress progress-primary w-3/4 m-4"
        value="70"
        max="100"
      ></progress>
      <span class="font-light w-1/4"
        >%70 of your tasks completed
        <FontAwesome :icon="faCheck" class="text-success ml-4"
      /></span>
    </div>
    <div
      class="card flex flex-col lg:flex-row justify-center overflow-y-auto min-h-96 max-h-96"
    >
      <StatsCard class="w-full lg:w-1/4" />
      <div class="w-3/4 overflow-auto p-6">
        <div v-if="loading" class="flex justify-center items-center h-full">
          <span class="loading loading-spinner text-primary loading-lg"></span>
        </div>
        <div
          v-if="!loading && !allTasks.length"
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
        <table v-if="allTasks.length && !loading" class="table">
          <thead>
            <tr>
              <th>
                <label>
                  <input
                    @click="
                      () =>
                        allTasks.map(
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
                <div class="flex justify-around items-center">
                  <button
                    @click="() => (isOpen = !isOpen)"
                    class="btn btn-square btn-outline border-primary hover:bg-transparent hover:border-primary"
                  >
                    <FontAwesome class="text-primary" :icon="faPlus" />
                  </button>
                  <button
                    v-if="allTasks.some((item) => item.isSelected)"
                    class="btn btn-square btn-outline border-[#53a653] hover:bg-transparent hover:border-primary"
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
              v-for="(item, index) in allTasks"
              :key="item.id"
              :title="item.title"
              :taskType="item.taskType"
              :startDate="
                item.startDate.substring(0, item.startDate.indexOf('T'))
              "
              :endDate="item.endDate.substring(0, item.endDate.indexOf('T'))"
              :isCompleted="item.isCompleted"
              :isSelected="item.isSelected"
              @isSelected="(value) => (allTasks[index].isSelected = value)"
            />
          </tbody>
        </table>
        <DialogsCreateTask
          v-if="isOpen"
          @closeDialog="(value) => (isOpen = value)"
          @getTasks="getAllTasks()"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { TasksService } from "../../services/tasks-service";
import {
  faInfoCircle,
  faCheck,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
definePageMeta({
  layout: "default",
});

const allTasks = ref([]);
const taskService = new TasksService();
let loading = ref(true);
let isOpen = ref(false);

const getAllTasks = () => {
  loading.value = true;
  taskService.GetTasks().then((res) => {
    if (res.success) {
      allTasks.value = res.items;
      loading.value = false;
    }
  });
};

onMounted(() => {
  getAllTasks();
});
</script>
