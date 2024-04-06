<template>
  <div class="navbar">
    <div class="navbar-start flex justify-center items-center">
      <NuxtLink
        to="/login"
        class="btn btn-ghost text-primary hover:bg-transparent text-2xl"
        >gBetter.</NuxtLink
      >
    </div>
    <div class="navbar-end flex justify-center items-center gap-4">
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
    label: "Login",
  },
  {
    href: "/signup",
    label: "Sign up",
  },
];
</script>
