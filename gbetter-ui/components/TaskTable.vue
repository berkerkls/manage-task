<template>
  <tr>
    <th>
      <label>
        <input type="checkbox" class="checkbox" />
      </label>
    </th>
    <td>
      <div class="flex items-center gap-3">
        <div>
          <div class="font-bold">{{ props.title }}</div>
          <div class="text-sm opacity-50">
            {{ props.taskType === "0" ? "Task" : "Roadmap" }}
          </div>
        </div>
      </div>
    </td>
    <td>
      {{ props.startDate }}
    </td>
    <td>{{ props.endDate }}</td>
    <th>
      <button class="btn btn-ghost btn-xs">details</button>
    </th>
  </tr>
</template>

<script setup>
let props = defineProps(["title", "taskType", "startDate", "endDate"]);
</script>
