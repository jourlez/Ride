import { i18nPlugin } from '../i18n/i18n-vue';
import { defineNuxtPlugin } from '#app';
import { loadLocaleAsync } from '../i18n/i18n-util.async';

export default defineNuxtPlugin(async (nuxtApp) => {
  const locale = 'en'; // TODO: detect locale
  await loadLocaleAsync(locale);
  nuxtApp.vueApp.use(i18nPlugin, locale);
});