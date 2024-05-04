<template>
  <div
    v-if="props.type == 'textarea'"
    :class="`${props.class} flex gap-2 flex-col`"
  >
    <span v-if="props.labelName" class="mb-1">{{ props.labelName }}</span>
    <textarea
      v-model="modelValue"
      :placeholder="props.placeholder"
      class="textarea textarea-bordered textarea-md resize-none"
      @input="$emit('update:modelValue', $event.target.value)"
    ></textarea>
  </div>
  <div v-else :class="`${props.class} flex flex-col`">
    <span v-if="props.labelName" class="mb-1">{{ props.labelName }}</span>
    <label
      :class="`input input-bordered flex items-center gap-2 ${props.class} ${
        !isInputValid && isRequired && 'input-error'
      }`"
    >
      <FontAwesome v-if="props.icon" :icon="props.icon" />
      <input
        v-model="modelValue"
        :type="props.type === 'password' && passwordView ? 'text' : props.type"
        class="grow"
        :placeholder="props.placeholder"
        @input="$emit('update:modelValue', $event.target.value)"
      />
      <FontAwesome
        v-if="props.type === 'password'"
        class="cursor-pointer"
        @click="passwordView = !passwordView"
        :icon="!passwordView ? faEye : faEyeSlash"
      />
    </label>
    <div
      v-motion-slide-bottom
      v-if="isRequired && !isInputValid"
      class="text-error text-start w-full py-2"
    >
      <p>{{ errorMessage }}</p>
    </div>
  </div>
</template>

<script setup>
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
let props = defineProps([
  "icon",
  "modelValue",
  "placeholder",
  "labelName",
  "type",
  "isRequired",
  "isValid",
  "class",
  "regex",
]);
let emits = defineEmits(["update:modelValue", "isInputValid"]);
let modelValue = ref(props.modelValue);
let passwordView = ref(false);
let isInputValid = ref(true);
let errorMessage = ref("");

onMounted(() => {
  console.log("mounted");
});
watch(modelValue, () => {
  if (props.labelName == "Email" && props.isRequired) {
    const mailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let isValidEmail = mailRegex.test(modelValue.value);
    if (!isValidEmail) {
      isInputValid.value = false;
      errorMessage.value = "Enter a valid email";
    } else {
      isInputValid.value = true;
    }
  } else if (
    props.labelName == "Password" &&
    modelValue.value.length < 6 &&
    props.isRequired
  ) {
    isInputValid.value = false;
    errorMessage.value = "Password cannot be shorter than 6";
  } else {
    if (!modelValue.value && !props.isRequired) {
      isInputValid.value = true;
    } else if (modelValue.value && props.isRequired) {
      isInputValid.value = true;
    } else {
      isInputValid.value = false;
    }

    errorMessage.value = `${props.placeholder.replace("*", "")} is required!`;
  }
  emits("isInputValid", isInputValid.value);
});
</script>
