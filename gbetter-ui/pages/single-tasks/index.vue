<template>
  <div class="card w-full h-full bg-base-100 shadow-xl p-10">
    <div
      class="flex flex-col lg:flex-row justify-center overflow-y-auto min-h-96 max-h-96"
    >
      <TaskMenu class="w-full lg:w-1/6" />
      <div class="w-3/4 overflow-auto p-6"></div>
    </div>
  </div>
</template>

<script setup>
import { useTaskStore } from "../../stores/taskStore";
definePageMeta({
  layout: "default",
});
const taskStore = useTaskStore();
</script>
