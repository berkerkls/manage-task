<template>
  <div class="card w-full h-full bg-base-100 shadow-xl p-10">
    <div class="card-title">
      <progress
        class="progress progress-primary w-full m-4"
        value="70"
        max="100"
      ></progress>
    </div>
    <div class="flex justify-center items-center h-full">
      <StatsCard class="w-1/4" />
      <div class="w-3/4">context</div>
    </div>
  </div>
</template>

<script setup>
import { TasksService } from "../../services/tasks-service";
definePageMeta({
  layout: "default",
});

const taskService = new TasksService();
</script>
