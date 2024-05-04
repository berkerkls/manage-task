<template>
  <ul
    class="flex justify-center items-start bg-[#fef3f3] w-56 rounded-box overflow-hidden"
  >
    <li v-for="(item, index) in taskStore.allTasks">
      <NuxtLink
        class="btn btn-ghotsed bg-transparent text-primary my-4 ml-3 hover:opacity-80 hover:bg-transparent border-primary hover:border-primary"
        >{{ item.title }}</NuxtLink
      >
    </li>
  </ul>
</template>

<script setup>
import { useTaskStore } from "../../stores/taskStore";
const taskStore = useTaskStore();
onMounted(() => {
  taskStore.getAllTasks();
});
</script>
