import React, { Fragment } from "react";
import Layout from "../components/layout";
import { Form, InputGroup, FormControl, Button, ProgressBar, Container } from "react-bootstrap";
import Wallet from "../components/wallet";
import { EtherToWei } from "../libs/blockchain";

const tokenData = {
  tokenPrice: 0.05, //price in Eth
  tokensSupply: 750000,
  tokenBalance: 10,
  tokensSold: 10,
};

export default function Home() {
  return (
    <Wallet tokenPrice={EtherToWei(tokenData.tokenPrice)} tokenSupply={tokenData.tokensSupply}>
      <Layout>
        {({ isLoggedIn }) => {
          return (
          <Fragment>
            <div className={'page-header-block'}>
              <h1 className={'text-center primary-header'}>DAPP TOKEN ICO SALE</h1>
            </div>
            <Container className={'text-center'}>
              <p>
                Introducing "DApp Token" (DAPP)!
                Token price is {tokenData.tokenPrice} Ether. currently have {tokenData.tokenBalance} DAPP.
              </p>
              {true ? (
                <Form>
                  <InputGroup size={'lg'} className={'mb-3'}>
                    <FormControl placeholder={'Tokens'} aria-label={'Tokens'} aria-describedby={'Tokens'} />
                    <Button variant="primary" id="buy-token-btn">Buy Tokens</Button>
                  </InputGroup>
                </Form>
              ) : (
                <div>You need to login with your wallet.</div>
              )}
              <ProgressBar animated striped now={20} />
              <p className={'text-center'}>{tokenData.tokensSold} / {tokenData.tokensSupply} tokens sold</p>
            </Container>     
          </Fragment>
        )}}
      </Layout>
    </Wallet>
  );
}
