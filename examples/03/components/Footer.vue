<template>
  <footer
    class="fixed bottom-8 w-full h-6 flex items-center justify-center gap-2"
  >
    {{ LL.footer.poweredby() }}
    <a
      class="
        flex
        items-center
        gap-2
        no-underline
        font-semibold
        text-black
        dark:text-white
      "
      href="https://decentralchain.io/"
      target="_blank"
    >
      <img
        alt="DCC"
        src="https://raw.githubusercontent.com/jourlez/ride/master/examples/03/public/favicon.ico"
        class="w-5"
      />
      {{ LL.footer.decentralchain() }}
    </a>
  </footer>
</template>

<script setup lang="ts">
  import { typesafeI18n } from '../i18n/i18n-vue'

  const { LL } = typesafeI18n()
</script>
