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
  const { site } = pageData;
  const { title, author, tokenPrice, tokenSupply, icoStart, icoEnd } = site;
  return (
    <Wallet tokenPrice={EtherToWei(tokenPrice)} tokenSupply={tokenSupply} icoStart={icoStart} icoEnd={icoEnd}>
      {(walletProps) => {
        const { isLoggedIn, accounts, loginFn } = walletProps;
        return (
          <Layout title={title} author={author} loginFn={loginFn} isLoggedIn={isLoggedIn} accounts={accounts}>
            <Fragment>
              <div className={'page-header-block'}>
                <h1 className={'text-center primary-header'}>DAPP TOKEN ICO SALE</h1>
              </div>
              <Container className={'text-center'}>
                <p>
                  Introducing "DApp Token" (DAPP)!
                  Token price is {tokenData.tokenPrice} Ether. currently have {tokenData.tokenBalance} DAPP.
                </p>
                {isLoggedIn ? <IcoForm /> : <div>You need to login with your wallet.</div>}
                <ProgressBar animated striped now={20} />
                <p className={'text-center'}>{tokenData.tokensSold} / {tokenData.tokensSupply} tokens sold</p>
              </Container>  
            </Fragment>
          </Layout>
        );
      }}
    </Wallet>
  );
}