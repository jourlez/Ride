import Config from "../settings";
let config = new Config();

class Getdata {
  constructor() {
    this.explorerSegment = config.get("network") == "T" ? "/testnet" : "";
    this.port = config.get("port");
    this.nodeUrl = config.get("nodeURL");
    this.providerUrl = config.get("providerUrl");
    this.userAddress = config.get("userAddress");
    this.dappAddress = config.get("dappAddress");

    if (window.location.pathname.split("/")[1]) {
      this.userAddress = window.location.pathname.split("/")[1];
    } else if (this.userAddress != "") {

    } else {
      alert("defined an account address");
    }
  }

  async getDataByKey(keyname) {
    let data = await fetch(`${this.nodeUrl}/addresses/data/${this.dappAddress}?matches=${keyname}`)
      .then((jsonres) => {
        return jsonres.json();
      })
      .then((res) => {
          return res;
      })
      .catch((err) => {
        console.log(err);
      });
    return data;
  }
}

export default Getdata;