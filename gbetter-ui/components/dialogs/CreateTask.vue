<template>
  <dialog id="create_task" class="modal">
    <div class="modal-box bg-[#ffeded]">
      <form method="dialog">
        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
          ✕
        </button>
      </form>
      <h3 class="font-medium text-primary text-xl text-center">Create Task</h3>
      <form @submit.prevent="createTask">
        <div v-for="(item, index) in createTaskElements">
          <SharedTextInput
            v-if="item.type !== 'select'"
            :key="index"
            v-model="item.value"
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
const taskType = ref(0);
const taskCommand = ref(new CreateTaskCommand());
const emits = defineEmits(["getTasks"]);

const createTask = () => {
  let taskTypeInput = createTaskElements.find(
    (item) => item.key === "taskType"
  );
  if (taskTypeInput) {
    taskTypeInput.value = taskType.value.toString();
  }
  createTaskElements.map((item) => {
    if (Object.keys(taskCommand.value).includes(item.key)) {
      taskCommand.value[item.key] = item.value;
    }
  });
  if (createTaskElements.every((item) => item.isValid && item.value)) {
    console.log(taskCommand.value);
    tasksService.CreateTask(taskCommand.value).then((res) => {
      if (res.success) {
        console.log(res);
        emits("getTasks");
        create_task.close();
      }
    });
  } else {
    console.log("not valid");
  }
};
</script>
