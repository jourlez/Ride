<template>
    <h1 class="text-4xl font-bold">{{ LL.messages.title() }}</h1>
    <p class="mt-2 text-lg">
      {{ LL.messages.description() }}
    </p>
</template>

<script lang="ts" setup>
  import { typesafeI18n } from '../i18n/i18n-vue'

  const { LL } = typesafeI18n()

  definePageMeta({
    layout: 'page',
  });
</script>