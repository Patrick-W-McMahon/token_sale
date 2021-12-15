import React, { Component, Fragment } from "react";
import detectEthereumProvider from '@metamask/detect-provider';
//import { unlockAccount } from '../libs/getWeb3';
//import getWeb3 from "../libs/getWeb3";

class Wallet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            accounts: ['0x0'],
            web3Provider: null,
            contracts: [],
            tokensSold: 0,
            web3: null,
            network: {
                chainId: null,
                isMetaMask: false,
                selectedAddress: null
            }
        }
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.renderChildren = this.renderChildren.bind(this);
        this.isLoggedIn = this.isLoggedIn.bind(this);
    }
    componentDidMount = async () => {
        const { ethereum: web3 } = window;
        const provider = await detectEthereumProvider();
        console.log('provider',web3.givenProvider);
        if(web3.givenProvider.selectedAddress) {
            this.login();
        }
        if(provider) {
            this.setState({ web3Provider: provider });
        } else {
            console.log('no wallet found');
        }

        if(typeof web3 === 'undefined') {
            console.log('no wallet found');
            return;
        }
        this.setState({ web3 });

        // handle account changes & logout
        web3.on("accountsChanged", accounts => {
            if(accounts.length === 0) {
                this.logout();
            }
        });
        

        //try {
            // Get network provider and web3 instance.
            //const web3 = await getWeb3();

            // Use web3 to get the user's accounts.
            //const accounts = await web3.eth.getAccounts();

            // Get the contract instance.
            //const networkId = await web3.eth.net.getId();
            //const deployedNetwork = SimpleStorageContract.networks[networkId];
            /*
            const instance = new web3.eth.Contract(
                SimpleStorageContract.abi,
                deployedNetwork && deployedNetwork.address,
            );
            */
            // Set web3, accounts, and contract to the state, and then proceed with an
            // example of interacting with the contract's methods.
            //this.setState({ web3, accounts, contract: instance }, this.runExample);
        //} catch (error) {
            //alert(`Failed to load web3, accounts, or contract. Check console for details.`);
            //console.error(error);
        //}


        /*
        let web3Provider = null;
        if (typeof web3 !== 'undefined') {
            this.setState({ web3Provider: })
            web3Provider = web3.currentProvider;
            web3 = new Web3(web3.currentProvider);
        } else {
            web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
            web3 = new Web3(App.web3Provider);
        }
        this.setState({ web3Provider });
        */
    }

    renderChildren = () => {
        const { children } = this.props;
        const { accounts, network } = this.state;
        const additionalProps = {
            loginFn: () => this.login(),
            isLoggedIn: accounts[0] !== '0x0',
            accounts,
            network
        };
        if (React.isValidElement(children)) {
            return React.Children.map(children, (child, i) => React.cloneElement(child, { key: i, ...additionalProps }));
          } else {
            return typeof children === 'function' ? children(additionalProps) : children;
          }
    }

    isLoggedIn = () => {
        const { accounts } = this.state;
        return accounts[0] !== '0x0';
    }

    login = async (address) => {
        const { web3 } = this.state;
        try {
            const accounts = await web3.request({ method: 'eth_requestAccounts' });
            const { chainId, isMetaMask, selectedAddress } = await web3;
            const network = await web3.request({method: 'eth_ChainId'});
            console.log(web3, network);
            this.setState({ accounts: [...accounts], network: { chainId, isMetaMask, selectedAddress } });
        } catch (err){
            console.log('login canceled',err);
            //throw "login canceled";
        } 
    }

    addToken = async () => {
        /*
        const { web3 } = this.state;
        const wasAdded = await web3.request({
            method: 'wallet_watchAsset',
            params: {
              type: 'ERC20', // Initially only supports ERC20, but eventually more!
              options: {
                address: tokenAddress, // The address that the token is at.
                symbol: tokenSymbol, // A ticker symbol or shorthand, up to 5 chars.
                decimals: tokenDecimals, // The number of decimals in the token
                image: tokenImage, // A string url of the token logo
              },
            },
        });
        */
    }

    logout = async () => {
        this.setState({ accounts: ['0x0'] });
    }

    runExample = async () => {
        //const { accounts, contract } = this.state;
    
        // Stores a given value, 5 by default.
        //await contract.methods.set(5).send({ from: accounts[0] });
    
        // Get the value from the contract to prove it worked.
        //const response = await contract.methods.get().call();
    
        // Update state with the result.
        //this.setState({ storageValue: response });
    };

    render() {
        return (<Fragment>{this.renderChildren()}</Fragment>);
    }
}

export default Wallet;