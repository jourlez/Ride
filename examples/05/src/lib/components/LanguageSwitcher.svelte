<select bind:value={localeToSelect} 
	class="
		text-white
		bg-sky-500
		dark:bg-sky-500
		i-fa-language
		dark:i-fa-language
	">
		{#each locales as locale}
			<option class="bg-neutral" value={locale}>{locale}</option>
		{/each}
</select>

<script lang="ts">
	import { onMount } from 'svelte'
	import { localStorageDetector } from 'typesafe-i18n/detectors'

	import LL, { locale, setLocale } from '../../i18n/i18n-svelte'
	import type { Locales } from '../../i18n/i18n-types'
	import { detectLocale, locales } from '../../i18n/i18n-util'
	import { loadLocaleAsync } from '../../i18n/i18n-util.async'

	onMount(async () => {
		const detectedLocale = detectLocale(localStorageDetector)
		await chooseLocale(detectedLocale)
		localeToSelect = $locale
	})

	const chooseLocale = async(locale: Locales) => {
		await loadLocaleAsync(locale)
		setLocale(locale)
	}

	let localeToSelect: Locales
	$: localeToSelect && chooseLocale(localeToSelect)

	$: $locale && localStorage.setItem('lang', $locale)

	let name: string = 'typesafe-i18n'
</script>

    