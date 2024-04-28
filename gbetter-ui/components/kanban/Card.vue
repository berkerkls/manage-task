<template>
  <div
    draggable="true"
    @dragstart="($event) => $emit('handleDragStart', $event, props)"
    class="cursor-grab rounded border border-primary bg-accent p-3 active:cursor-grabbing"
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
