<template>
  <div class="stats lg:stats-vertical shadow">
    <div class="stat">
      <div class="stat-figure text-primary">
        <FontAwesome :icon="faListAlt" class="h-5 w-5" />
      </div>
      <div class="stat-title">Total Tasks</div>
      <div class="stat-value">{{ props.allTasks.length }}</div>
    </div>

    <div class="stat">
      <div class="stat-figure text-secondary">
        <FontAwesome :icon="faBookmark" class="h-5 w-5 text-warning" />
      </div>
      <div class="stat-title">Tasks Opened This Week</div>
      <div class="stat-value">
        {{
          props.allTasks.filter(
            (item) =>
              new Date(item.createdAt) >=
              new Date().setDate(new Date().getDate() - 7)
          ).length
        }}
      </div>
    </div>

    <div class="stat">
      <div class="stat-figure text-secondary">
        <FontAwesome :icon="faCheck" class="h-5 w-5 text-success" />
      </div>
      <div class="stat-value">
        {{
          props.allTasks.filter(
            (item) =>
              new Date(item.createdAt) >=
                new Date().setDate(new Date().getDate() - 7) && item.isCompleted
          ).length
        }}
      </div>
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

let props = defineProps(["allTasks"]);
</script>
