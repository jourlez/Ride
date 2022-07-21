<template>
  <button
    @click.prevent="callSigner"
    class="
      m-3
      px-4
      py-1
      rounded
      border-none
      bg-sky-500
      hover:bg-sky-600
      text-sm text-white
    "
  >
    {{ loginButtonText }}
  </button>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import { Signer } from '@decentralchain/signer';
  import { ProviderWeb } from '@waves.exchange/provider-web';
  import { typesafeI18n } from '../i18n/i18n-vue'
  

  let signer: Signer;
  let provider: ProviderWeb;

  if (process.client) {
    signer = new Signer({
      NODE_URL: 'https://nodes-testnet.wavesnodes.com'
    })//https://mainnet-node.decentralchain.io
    //https://nodes-testnet.wavesnodes.com
    provider = new ProviderWeb('https://testnet.waves.exchange/signer/');
    signer.setProvider(provider);
  }

  const { LL, locale, } = typesafeI18n()
  const loginButtonText = ref(LL.value.login.login());
  const isAuthenticated = ref(false);

  async function callSigner() {
    if (isAuthenticated.value == false) {
      //{{ $t('messages.description') }}
      loginButtonText.value = LL.value.login.logging();

      try {
        const userData = await signer.login();
        loginButtonText.value = LL.value.login.logged({ address: userData.address }); 
        isAuthenticated.value = true;
      } catch (error) {
        loginButtonText.value = LL.value.login.login();
      }
    }
  }

  watch(locale, () => {loginButtonText.value = LL.value.login.login()})
</script>
