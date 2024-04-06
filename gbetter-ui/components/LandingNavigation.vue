<template>
  <div class="navbar">
    <div class="navbar-start flex justify-center items-center">
      <NuxtLink
        to="/"
        class="btn btn-ghost text-primary hover:bg-transparent text-3xl border-none"
        >gBetter.</NuxtLink
      >
    </div>
    <div class="navbar-end flex justify-center items-center">
      <SharedLinkItem
        v-for="(item, index) in navigationLinks"
        :key="index"
        :href="item.href"
        :is-active="route.fullPath === item.href"
        :label="item.label"
      />
    </div>
  </div>
</template>

<script setup>
let route = useRoute();
const navigationLinks = [
  {
    href: "/login",
    label: "Log in",
  },
];
</script>
