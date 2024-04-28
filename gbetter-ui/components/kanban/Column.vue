<template>
  <div class="w-56 shrink-0">
    <div class="flex justify-between items-center mb-3">
      <h3 :class="`${props.headingColor} font-medium`">{{ props.title }}</h3>
      <span class="rounded text-sm text-secondary">{{
        taskStore.allTasks.length
      }}</span>
    </div>
    <div
      @dragend="handleDragEnd"
      @dragover="handleDragOver"
      @dragleave="handleDragLeave"
      :class="`'h-full w-full transition-colors ${
        active ? 'bg-secondary' : 'bg-transparent'
      }'`"
    >
      <KanbanCard
        v-for="(item, index) in taskStore.allTasks"
        :key="item._id"
        :id="item._id"
        :title="item.title"
        :column="item.column"
        @handle-drag-start="(event, card) => handleDragStart(event, card)"
      />
    </div>
  </div>
</template>

<script setup>
import { useTaskStore } from "../../stores/taskStore";
const taskStore = useTaskStore();
let props = defineProps(["title", "headingColor", "column"]);
let active = ref(false);
let cardId = ref("");

const handleDragStart = (event, card) => {
  cardId.value = card.id;
  event.dataTransfer.setData("cardId", cardId.value);
};

const handleDragOver = (event) => {
  event.preventDefault();
  active.value = true;
};
const handleDragLeave = () => {
  active.value = false;
};
const handleDragEnd = (event) => {
  const cardId = event.dataTransfer.getData("cardId");
  console.log("cardId", cardId);
};
</script>
