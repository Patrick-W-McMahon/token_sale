import React, { Fragment } from "react";
import { graphql, useStaticQuery } from 'gatsby';
import Layout from "../components/layout";
import { ProgressBar, Container } from "react-bootstrap";
import Wallet from "../components/wallet";
import { EtherToWei } from "../libs/blockchain";
import IcoForm from "../components/IcoForm";

const tokenData = {
  tokenBalance: 10,
  tokensSold: 10
};

export default function Home() {
  const pageData = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
          tokenPrice
          tokenSupply
          icoStart
          icoEnd
        }
      }
    }   
  `);
  const { title, author, tokenPrice, tokenSupply, icoStart, icoEnd } = pageData.site.siteMetadata;
  return (
    <Wallet tokenPrice={EtherToWei(tokenPrice)} tokenSupply={tokenSupply} icoStart={icoStart} icoEnd={icoEnd}>
      {(walletProps) => {
        const { buyTokenFn, isLoggedIn, accounts, loginFn, logoutFn, network } = walletProps;
        return (
          <Layout buyTokenFn={buyTokenFn} loginFn={loginFn} logoutFn={logoutFn} isLoggedIn={isLoggedIn} accounts={accounts} title={title} author={author} network={network}>
            <Fragment>
              <div className={'page-header-block'}>
                <h1 className={'text-center primary-header'}>DAPP TOKEN ICO SALE</h1>
              </div>
              <Container className={'text-center'}>
                <p>
                  Introducing "DApp Token" (DAPP)!
                  Token price is {tokenData.tokenPrice} Ether. currently have {tokenData.tokenBalance} DAPP.
                </p>
                {isLoggedIn ? <IcoForm buyTokenFn={buyTokenFn} /> : <div>You need to connect a wallet to interact with the ICO sale.</div>}
                <ProgressBar animated striped now={20} />
                <p className={'text-center'}>{tokenData.tokensSold} / {tokenSupply} tokens sold</p>
              </Container>  
            </Fragment>
          </Layout>
        );
      }}
    </Wallet>
  );
}