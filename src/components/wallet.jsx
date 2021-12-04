import React, { Component, Fragment } from "react";
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
            web3: null
        }
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.renderChildren = this.renderChildren.bind(this);
        this.isLoggedIn = this.isLoggedIn.bind(this);
    }
    componentDidMount = async () => {
        const { ethereum: web3 } = window;

        if(typeof web3 === 'undefined') {
            console.log('no wallet found');
        }
        this.setState({ web3 });
        

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
        const { accounts } = this.state;
        const handleLogin = () => this.login();
        const childrenWithProps = React.Children.map(children, (child, index) => {
            if(typeof child == 'object') {
                return React.cloneElement(child, {
                    key: index,
                    loginFn: () => handleLogin(),
                    isLoggedIn: accounts[0] !== '0x0',
                    accounts,
                });
            } else {
                return child;
            }   
        });
        return childrenWithProps;
    }

    isLoggedIn = () => {
        const { accounts } = this.state;
        return accounts[0] !== '0x0';
    }

    login = async () => {
        const { web3 } = this.state;
        const accounts = await web3.request({ method: 'eth_requestAccounts' });
        this.setState({ accounts: [...accounts] });
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