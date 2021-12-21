const networks = require('./chainIds.json');

const EtherToGwei = eth => eth * 1000000000;

const EtherToWei = eth => eth * 1000000000000000000;

const addressShortDisplay = addr => `${addr.substring(0, 6)}....${addr.substring(addr.length-6, addr.length)}`;

const getNetworkData = networkId => {
    const net = networks[networkId];
    if(net === undefined) {
        return {
            name: "unknown",
            longName: "unknown network",
            currency: "Eth"
        };
    }
    return net;
};

export {
    EtherToGwei,
    EtherToWei,
    addressShortDisplay,
    getNetworkData
}