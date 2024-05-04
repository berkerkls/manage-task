<template>
  <NuxtLayout>
    <div class="container mx-auto p-4 h-full">
      <NuxtPage />
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts"></script>

<style>
::-webkit-scrollbar {
  width: 8px;
  height: 13px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: transparent;
  border-radius: 10px;
  border: 2px solid #ff4c4c;
  cursor: pointer;
}
</style>
