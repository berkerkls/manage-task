<template>
  <div
    v-motion
    draggable="true"
    @dragstart="() => $emit('handleDragStart', props)"
    class="cursor-grab rounded border border-primary bg-accent p-4 m-2 active:cursor-grabbing"
  >
    <p class="text-sm text-primary">{{ props.title }}</p>
  </div>
</template>

<script setup>
import { useTaskStore } from "../../stores/taskStore";
const taskStore = useTaskStore();
let props = defineProps(["title", "id", "column"]);
let emits = defineEmits(["handleDragStart"]);
</script>
