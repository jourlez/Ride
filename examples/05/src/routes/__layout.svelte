<svelte:head>
  <title>Decentralchain + Svelte</title>
  <meta name="description" content="Demo project for Decentralchain Signer authentication" />
  </svelte:head>

<div class="m-1 flex gap-2 float-right">
  <LanguageSwitcher />
  <DarkToggle/>
  <a href="https://github.com/jourlez/dcc-svelte" target="_blank" class="text-sky-500 i-carbon-logo-github"/>
</div>
<div
  class="
  flex flex-col
  items-center
  text-center
  justify-center
  w-full
  h-screen
  "
  >

  <slot />
  <Login/>
  <Footer />
</div>

<script lang="ts">
  import 'uno.css'
  import LanguageSwitcher from '../lib/components/LanguageSwitcher.svelte';
  import DarkToggle from '../lib/components/DarkToggle.svelte';
  import Login from '../lib/components/Login.svelte';
  import Footer from '../lib/components/Footer.svelte';
</script>

<style>
	:global(body.dark) {
    background: #222;
    color: white;
	}
</style>