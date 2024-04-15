<template>
  <dialog id="create_task">
    <div class="modal-box bg-[#ffeded]">
      <button
        @click="closeModal"
        class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
      >
        ✕
      </button>
      <h3 class="font-medium text-primary text-xl text-center">Create Task</h3>
      <form @submit.prevent="createTask">
        <div v-for="(item, index) in taskFormInputs">
          <SharedTextInput
            v-if="item.type !== 'select'"
            :key="index"
            v-model="item.value"
            :modelValue="item.value"
            :class="item.class"
            :is-required="item.isRequired"
            :is-valid="item.isValid"
            :label-name="item.labelName"
            :placeholder="item.placeholder"
            :type="item.type"
            @isInputValid="
              (value) => (createTaskElements[index].isValid = value)
            "
          />
          <div v-if="item.type === 'select'" class="p-4 grow">
            <select v-model="taskType" class="select select-bordered w-full">
              <option :value="item.itemValues?.Task">Task</option>
              <option :value="item.itemValues?.Roadmap">Roadmap</option>
            </select>
          </div>
        </div>
        <!-- if there is a button in form, it will close the modal -->
        <div class="flex justify-end gap-4 pt-8">
          <button type="submit" class="btn btn-primary text-white">
            Submit
          </button>
        </div>
      </form>
    </div>
  </dialog>
</template>

<script setup>
import { CreateTaskCommand } from "~/utils/models";
import { createTaskElements } from "~/utils/contants";
import { TasksService } from "~/services/tasks-service";

const tasksService = new TasksService();
const emits = defineEmits(["getTasks", "closeDialog"]);
let taskType = ref(0);
let taskCommand = ref(new CreateTaskCommand());
let taskFormInputs = ref(structuredClone(createTaskElements));

onMounted(() => {
  const modal = document.getElementById("create_task");
  modal.showModal();
  if (modal.classList !== "modal") modal.classList = "modal";
});

const closeModal = () => {
  const modal = document.getElementById("create_task");
  modal.close();
  emits("closeDialog", false);
};

const createTask = () => {
  let taskTypeInput = taskFormInputs.value.find(
    (item) => item.key === "taskType"
  );
  if (taskTypeInput) {
    taskTypeInput.value = taskType.value.toString();
  }
  taskFormInputs.value.map((item) => {
    if (Object.keys(taskCommand.value).includes(item.key)) {
      taskCommand.value[item.key] = item.value;
    }
  });
  if (taskFormInputs.value.some((item) => item.isRequired && !item.value)) {
    console.log("not valid", taskCommand.value);
  } else {
    tasksService.CreateTask(taskCommand.value).then((res) => {
      if (res.success) {
        emits("getTasks");
        closeModal();
        taskFormInputs.value = structuredClone(createTaskElements);
        taskCommand.value = new CreateTaskCommand();
      }
    });
  }
};
</script>
