<template>
  <main class="h-screen flex flex-col justify-between">
    <header>
      <LandingNavigation />
    </header>
    <section>
      <slot />
    </section>

    <LandingFooter />
  </main>
</template>

<script setup></script>
