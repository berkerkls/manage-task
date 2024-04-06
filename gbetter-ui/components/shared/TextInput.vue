<template>
  <div class="flex flex-col gap-2">
    <span v-if="props.labelName">{{ props.labelName }}</span>
    <label
      :class="`input input-bordered flex items-center gap-2 ${props.class}`"
    >
      <FontAwesome v-if="props.icon" :icon="props.icon" />
      <input
        v-model="modelValue"
        :type="props.type === 'password' && passwordView ? 'text' : props.type"
        :class="class"
        :placeholder="props.placeholder"
        @input="$emit('update:modelValue', $event.target.value)"
      />
      <FontAwesome
        class="cursor-pointer"
        v-if="props.type === 'password'"
        @click="passwordView = !passwordView"
        :icon="!passwordView ? faEye : faEyeSlash"
      />
    </label>
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
]);
let emits = defineEmits(["update:modelValue"]);
let modelValue = ref(props.modelValue);
let passwordView = ref(false);
</script>
