<button
    on:click={callSigner}
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
    { loginButtonText }
</button>

<script lang="ts">
import {
    browser
} from '$app/env';
import {
    Signer
} from '@decentralchain/signer'
import {
    ProviderWeb
} from '@waves.exchange/provider-web'
import LL from '../../i18n/i18n-svelte'

let signer: Signer
let provider: ProviderWeb

if (browser) {
    signer = new Signer({
        NODE_URL: 'https://nodes-testnet.wavesnodes.com'
    })//https://mainnet-node.decentralchain.io
    //https://nodes-testnet.wavesnodes.com
    provider = new ProviderWeb('https://testnet.waves.exchange/signer/')
    signer.setProvider(provider)
}

let loginButtonText = $LL.login.login()
let isAuthenticated = false

async function callSigner() {

    if (isAuthenticated == false) {
        loginButtonText = $LL.login.logging()

        try {
            const userData = await signer.login()
            loginButtonText = $LL.login.logged({ address: userData.address })
            isAuthenticated = true
        } catch (error) {
            loginButtonText = $LL.login.login()
        }
    } 
}
$: {loginButtonText = $LL.login.login()}
</script>
