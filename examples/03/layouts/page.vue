<template>
  <div class="m-1 flex gap-2 float-right">
    <LanguageSwitcher />
    <DarkToggle />
    <NuxtLink to="https://github.com/jourlez/dcc-nuxt3" target="_blank" class="text-sky-500 i-carbon-logo-github"/>
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
    <Login />
    <Footer />
  </div>
</template>
