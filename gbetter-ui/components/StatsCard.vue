<template>
  <div class="stats lg:stats-vertical shadow">
    <div class="stat">
      <div class="stat-figure text-primary">
        <FontAwesome :icon="faListAlt" class="h-5 w-5" />
      </div>
      <div class="stat-title">Total Tasks</div>
      <div class="stat-value">{{ taskStore.totalTask }}</div>
    </div>

    <div class="stat">
      <div class="stat-figure text-secondary">
        <FontAwesome :icon="faBookmark" class="h-5 w-5 text-warning" />
      </div>
      <div class="stat-title">Tasks Opened This Week</div>
      <div class="stat-value">{{ taskStore.tasksOpenedThisWeek }}</div>
    </div>

    <div class="stat">
      <div class="stat-figure text-secondary">
        <FontAwesome :icon="faCheck" class="h-5 w-5 text-success" />
      </div>
      <div class="stat-value">{{ taskStore.tasksDoneThisWeek }}</div>
      <div class="stat-title">Tasks Done This Week</div>
      <div class="stat-desc text-secondary">6 tasks remaining</div>
    </div>
  </div>
</template>

<script setup>
import {
  faListAlt,
  faBookmark,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { useTaskStore } from "../../stores/taskStore";

let props = defineProps(["allTasks"]);
const taskStore = useTaskStore();
</script>
