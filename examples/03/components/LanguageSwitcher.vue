<template>
    <select
        v-model="selectedLocale"
        @change="chooseLocale(selectedLocale)"
        class="
        text-white
        bg-sky-500
        dark:bg-sky-500
        i-fa-language
        dark:i-fa-language
        "
    >
        <option class="bg-neutral" v-for="locale in locales" :value="locale" v-bind:key="locale">{{ locale }}</option>
    </select>
</template>

<script setup lang="ts">
    // This starter template is using Vue 3 <script setup> SFCs
    // Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
    import { ref } from 'vue'
    import type { Locales } from '../i18n/i18n-types'
    import { locales } from '../i18n/i18n-util'
    import { loadLocaleAsync } from '../i18n/i18n-util.async'
    import { typesafeI18n } from '../i18n/i18n-vue'

    const { LL, locale, setLocale } = typesafeI18n()
    const chooseLocale = async (locale: Locales) => {
        await loadLocaleAsync(locale)
        setLocale(locale)
    }

    let selectedLocale = ref(locale.value)
</script>