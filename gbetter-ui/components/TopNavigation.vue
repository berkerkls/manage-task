<template>
  <div class="navbar flex justify-center items-center">
    <div class="flex justify-between items-center p-10 w-2/4">
      <SharedLinkItem
        v-for="(item, index) in MenuItems"
        :key="index"
        :href="item.href"
        :label="item.label"
        :icon="item.icon"
        :is-active="route.fullPath === item.href"
      ></SharedLinkItem>
    </div>
  </div>
</template>

<script setup>
import { MenuItems } from "~/utils/contants";
let route = useRoute();
</script>
