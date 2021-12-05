import React from "react";
import { Form, InputGroup, FormControl, Button } from 'react-bootstrap';

const IcoForm = ({ loginFn, isLoggedIn, accounts }) => (
    <Form>
        <InputGroup size={'lg'} className={'mb-3'}>
            <FormControl placeholder={'Tokens'} aria-label={'Tokens'} aria-describedby={'Tokens'} />
            <Button variant="primary" id="buy-token-btn">Buy Tokens</Button>
        </InputGroup>
    </Form>
);

export default IcoForm;