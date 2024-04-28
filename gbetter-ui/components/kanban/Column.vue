<template>
  <div class="w-56 shrink-0">
    <div :class="`flex justify-between items-center mb-3`">
      <h3 :class="`${props.headingColor} font-medium`">{{ props.title }}</h3>
      <span class="rounded text-sm text-secondary">{{
        taskStore.allTasks.length
      }}</span>
    </div>
    <div
      @dragend="
        () => {
          kanbanStore.handleDragEnd;
          clearHighlights();
        }
      "
      @dragover="
        (e) => {
          e.preventDefault();
          handleIndicator(e);
          kanbanStore.handleDragOver;
          active = true;
        }
      "
      @dragleave="
        () => {
          kanbanStore.handleDragLeave;
          active = false;
        }
      "
      :class="`h-screen w-full ${active ? 'bg-accent' : 'bg-transparent'}`"
    >
      <KanbanCard
        v-for="(item, index) in taskStore.allTasks"
        :key="index"
        :id="item._id"
        :title="item.title"
        :column="item.column"
        @handle-drag-start="(card) => kanbanStore.handleDragStart(card.id)"
      />
    </div>
  </div>
</template>

<script setup>
import { useTaskStore } from "../../stores/taskStore";
import { useKanbanStore } from "../../stores/kanbanStore";
const taskStore = useTaskStore();
const kanbanStore = useKanbanStore();
let props = defineProps(["title", "headingColor", "column"]);
let active = ref(false);
</script>
