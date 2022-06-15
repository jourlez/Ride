// IMPORT SIGNER AND PROVIDER LIB
import {Signer} from "@waves/signer";
import {ProviderWeb} from "@waves.exchange/provider-web";

// IMPORT GETDATA TOOLS, THIS FILE INCLUDE METHODS USED IN DIFFERENT PAGES TO AVOID REPETITION
import Getdata from "./getdata";
// INIT THE TOOLS
let getdata = new Getdata();

// INIT AND CONFIGURE WAVES SIGNER
let signer = new Signer({
  NODE_URL: getdata.nodeUrl,
}); 
let provider = new ProviderWeb(getdata.providerUrl);
signer.setProvider(provider);

// WE CREATE A FONCTION TO DISPLAY ALERTS
let displayAlert = function (type, msg = "") {
  switch (type) {
    case "clear":
      document.querySelector(".alert-success").classList.add("d-none");
      document.querySelector(".alert-success").innerHTML = "";
      document.querySelector(".alert-danger").classList.add("d-none");
      document.querySelector(".alert-danger").innerHTML = "";
      break;

    case "error":
      document.querySelector(".alert-success").classList.add("d-none");
      document.querySelector(".alert-success").innerHTML = "";
      document.querySelector(".alert-danger").classList.remove("d-none");
      document.querySelector(".alert-danger").innerHTML = msg;
      break;

    case "success":
      document.querySelector(".alert-success").classList.remove("d-none");
      document.querySelector(".alert-success").innerHTML = msg;
      document.querySelector(".alert-danger").classList.add("d-none");
      document.querySelector(".alert-danger").innerHTML = "";
      break;

    default:
  }
};

// WE CONNECT WITH WAVES SIGNER
document.getElementById("login").addEventListener("click", function(e){
    e.preventDefault();
    signer.login().then(async data => {
        
        // GET/SET PAGE NAME FROM DAPP DATA STORAGE
        getdata.getDataByKey(signer._userData.address + "_entry").then((res) => {
          document.getElementById("entry").innerHTML = res[0].value;
        });

        // GET/SET PAGE DESCRIPTION FROM DAPP DATA STORAGE
        getdata.getDataByKey(signer._userData.address + "_description").then((res) => {
          document.getElementById("description").innerHTML = res[0].value;
        });

        // DISPLAY CURRENT ACCOUNT ADDRESS AND A LINK TO GO GET THE SEED IF NEWLY CREATED ACCOUNT
        document.getElementById("infosAccount").style.display = "none";
        document.getElementById("account").innerHTML = getdata.userAddress;
        document.getElementById("contract").innerHTML = getdata.dappAddress;
        document.getElementById("previousInfo").style.display = "block";
        document.getElementById("accordionWrapper").style.display = "block";
        
    }).catch(err => {
        console.log(err)
    })
})

// WE SET THE GENERAL INFOS RELATED TO THIS ACCOUNT / PAGE SUCH AS NAME/TITLE AND DESCRIPTION
document.getElementById("accountInfo").addEventListener("click", function(e){
    e.preventDefault();
    displayAlert("clear");
    let entry = document.getElementById("newEntry").value;
    let description = document.getElementById("newDescription").value;
    const data = {
        dApp: getdata.dappAddress,
        call: {
            function: 'addUpdateEntry',
            args: [
                { type: 'string', value: entry},
                { type: 'string', value: description }
            ],
        },
    }
    signer
      .invoke(data)
      .broadcast()
        .then((res) => {
          displayAlert("success", "Infos updated");
          document.getElementById("entry").innerHTML = entry;
          document.getElementById("description").innerHTML = description;
        })
        .catch((err) => {
          console.log(err)
          displayAlert("error", err.message ? err.message : err);
        });
})

// HERE IS JUST TO CENTER CORRECTLY DEPENDING ON SCREEN SIZE, SWITCHING THE FLEX ALIGNMENT
let loadResize = function(e){
  if(document.querySelector('.wrap_admin').offsetHeight > document.querySelector('body').offsetHeight){ 
    document.querySelector('body').style.justifyContent = "flex-start" 
    document.querySelector('body').style.height = "auto"
  }else{
    document.querySelector("body").style.justifyContent = "center"; 
    document.querySelector("body").style.height = "100%";
  }
}

$(".collapse").on("hidden.bs.collapse", loadResize);
window.addEventListener("load", loadResize);
window.addEventListener("resize", loadResize);