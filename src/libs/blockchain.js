const EtherToGwei = eth => eth * 1000000000;

const EtherToWei = eth => eth * 1000000000000000000;

const addressShortDisplay = addr => `${addr.substring(0, 6)}....${addr.substring(addr.length-6, addr.length)}`;


export {
    EtherToGwei,
    EtherToWei,
    addressShortDisplay
}