<template>
  <div class="container">
    <div>
      <h1 class="title">
        Decentralchain + Nuxt3
      </h1>
      <h2 class="subtitle">
        Demo project for Decentralchain Signer Authentication
      </h2>
      <div class="links">
        <a
          @click.prevent="callSigner"
          href="#"
          target="_blank"
          class="signbutton"
        >
          {{ loginButtonText }}
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Signer } from '@decentralchain/signer'
import { ProviderWeb } from '@waves.exchange/provider-web'

let signer
let provider

if (process.client) {
  signer = new Signer({
  NODE_URL: 'https://mainnet-node.decentralchain.io'
})
  provider = new ProviderWeb('https://testnet.waves.exchange/signer/')
  signer.setProvider(provider)
}

const loginButtonText = ref('Login')
const isAuthenticated = ref(false)

async function callSigner(){
  if (isAuthenticated.value == false) {
    loginButtonText.value = 'Logging in...'

    try {
      const userData = await signer.login()
      loginButtonText.value = `Signed in as ${userData.address}`
      isAuthenticated.value = true
    } catch (error) {
      loginButtonText.value = 'Login'
    }
  } else {
    try {
      await signer.logout()
      isAuthenticated.value = false
      loginButtonText.value = 'Login'
    } catch (error) {
      loginButtonText.value = 'Login'
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: rgb(0, 0, 0);
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: rgb(0, 0, 0);
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

a.signbutton {
  display: inline-block;
  padding: 0.35em 1.2em;
  border: 0.1em solid rgb(0, 0, 0);
  margin: 0 0.3em 0.3em 0;
  border-radius: 0.12em;
  box-sizing: border-box;
  text-decoration: none;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  color: rgb(0, 0, 0);
  text-align: center;
  transition: all 0.2s;
}
a.signbutton:hover {
  color: #000000;
  background-color: rgba(0, 0, 0, 0.7);
}
</style>
