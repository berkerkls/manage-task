<template>
  <div class="card w-full h-full bg-base-100 shadow-xl p-10">
    <div class="flex items-center overflow-y-auto min-h-96 max-h-96">
      <div class="h-full w-full text-neutral-50">
        <KanbanBoard />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useTaskStore } from "../../stores/taskStore";
definePageMeta({
  layout: "default",
});
const taskStore = useTaskStore();
onMounted(() => {
  taskStore.getAllTasks();
});
</script>
