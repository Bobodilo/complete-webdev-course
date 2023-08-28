    import { default as Web3} from 'web3'; //connect with ETh blockchain
    import { default as contract } from 'truffle-contract'; //Eth contract abstraction for the browser to allow Smart contracts with JS methods
    import taskMasterArtifacts from '../../build/contracts/TaskMaster.json'; //JSON represation of the contract
    
    var TaskMaster = contract(taskMasterArtifacts); // Get JS abstraction
    var ownerAccount;
    
    window.addEventListener('load', function() {
    window.web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8545")); // on load let us interact with the blockchainvia this host
    TaskMasterApp.setWeb3Provider(); //set provider
    TaskMasterApp.getAccounts(); // get all accounts
    
    });

    window.TaskMasterApp = {
        setWeb3Provider: function() {
    TaskMaster.setProvider(web3.currentProvider);
    },

        refreshAccountBalance: function() {
    var self = this;
    TaskMaster.deployed()
    .then(function(taskMasterInstance) {
    return taskMasterInstance.getBalance.call(ownerAccount, {
    from: ownerAccount
    });
    }).then(function(value) {
    document.getElementById("accountBalance").innerHTML =
    value.valueOf();
    document.getElementById("accountBalance").style.color =
    "white";
    }).catch(function(e) {
    console.log(e);
    });
    },

    getAccounts: function () {  // Get accounts from web3 and set ownerAccount to oth addr
    var self = this;
    web3.eth.getAccounts(function(error, accounts) {
    if (error != null) {
    alert("Sorry, something went wrong. We couldn't fetch your accounts.");
    return;
    }
    if (!accounts.length){
        alert("Sorry, no errors, but we couldn't get any accounts - Make sure your Ethereum client is configured correctly.");
    return;
    }
    ownerAccount = accounts[0];
    self.refreshAccountBalance();
    })
    },

    };




