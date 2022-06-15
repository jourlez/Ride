class Config{
    constructor(opts) {
      this.network = "T";
      this.port = 3333;
      this.nodeURL = "https://nodes-testnet.wavesnodes.com"; // https://nodes.wavesplatform.com
      this.providerUrl = "https://testnet.waves.exchange/signer/"; // "https://waves.exchange/signer/"
      this.userAddress = "3MxmnsMesbmV4mX8kpsDDDpbB34xtWnGVmw"; // 3P...
      this.dappAddress = "3MtFfzNQ3z2sfKCnYZn3RnT3NatsS3C1qtR"; // 3P...
    }
  
    get(key) {
      return this[key];
    }
  
    set(key, val) {
      this[key] = val;
    }
  
  }
  module.exports = Config