<template>
  <div class="flex h-full w-full gap-3 overflow-scroll p-16 bg-transparent">
    <KanbanColumn
      v-for="(item, index) in KanbanColumns"
      :key="index"
      :title="item.title"
      :column="item.column"
      :heading-color="item.headingColor"
    />
  </div>
</template>

<script setup>
import { useTaskStore } from "../../stores/taskStore";
import { KanbanColumns } from "~/utils/contants";
const taskStore = useTaskStore();
</script>
