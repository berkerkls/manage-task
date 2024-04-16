<template>
  <tr :class="className">
    <th>
      <label>
        <input
          :checked="props.isSelected == true ? 'checked' : null"
          type="checkbox"
          class="checkbox"
          v-model="selected"
          @change="$emit('isSelected', selected)"
        />
      </label>
    </th>
    <td>
      <div class="flex items-center gap-3">
        <div>
          <div class="font-bold">{{ props.title }}</div>
          <div class="text-sm opacity-50">
            {{ props.taskType == 0 ? "Task" : "Roadmap" }}
          </div>
        </div>
      </div>
    </td>
    <td>
      {{ formatter.format(new Date(props.startDate)) }}
    </td>
    <td>{{ formatter.format(new Date(props.endDate)) }}</td>
    <th>
      <div class="flex justify-start items-center">
        <button class="btn btn-ghost btn-xs">details</button>
        <button
          @click="$emit('deleteTask', props.id)"
          class="btn btn-ghost text-error btn-xs hover:bg-[#fdeceb]"
        >
          delete
        </button>
      </div>
    </th>
  </tr>
</template>

<script setup>
let props = defineProps([
  "title",
  "taskType",
  "startDate",
  "endDate",
  "isCompleted",
  "isSelected",
  "id",
]);
let emits = defineEmits(["isSelected", "deleteTask"]);
let selected = ref(props.isSelected);
const formatter = new Intl.DateTimeFormat("tr-TR", {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
});

let className = computed(() => {
  if (!props.isCompleted && new Date(props.endDate) < new Date()) {
    return "bg-[#fdeceb]";
  }
  if (props.isCompleted) {
    return "bg-[#eef7ee]";
  }
  return;
});
</script>
