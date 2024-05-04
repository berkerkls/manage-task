<template>
  <NuxtLink
    v-if="!props.isActive && !props.isTextLink"
    :class="props.class ? props.class : 'btn btn-primary text-white px-6'"
    :to="props.href"
  >
    <FontAwesome v-if="props.icon" :icon="props.icon" />{{
      props.label
    }}</NuxtLink
  >
  <NuxtLink
    v-if="props.isActive && !props.isTextLink"
    :class="
      props.class
        ? props.class
        : 'btn btn-outline hover:bg-transparent border-primary hover:border-primary hover:text-primary text-primary hover:opacity-75 px-6'
    "
    :to="props.href"
  >
    <FontAwesome v-if="props.icon" :icon="props.icon" />{{
      props.label
    }}</NuxtLink
  >
</template>

<script setup>
const props = defineProps(["href", "label", "isActive", "class", "icon"]);
</script>
