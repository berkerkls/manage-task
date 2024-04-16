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
  cursor: pointer;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgb(255, 165, 165);
  border-radius: 10px;
}
</style>
