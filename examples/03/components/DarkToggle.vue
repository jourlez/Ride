<template>
  <button
    @click="toggleDark()"
    class="text-sky-500 i-carbon-sun dark:i-carbon-moon"
  />
</template>

<script setup lang="ts">
  import { useDark, useToggle } from '@vueuse/core';

  const isDark = useDark();
  const toggleDark = useToggle(isDark);
</script>
