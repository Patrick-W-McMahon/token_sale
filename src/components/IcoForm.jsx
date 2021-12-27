import React, { Component } from "react";
import { Form, InputGroup, FormControl, Button } from 'react-bootstrap';

const MAX_SUPPLY = 10;

class IcoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tokenCount: 0
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleSubmit = event => {
        event.preventDefault();
        const { buyTokenFn } = this.props;
        const { tokenCount } = this.state;
        console.log(tokenCount);
        buyTokenFn(tokenCount);
    };
    handleInputChange = event => {
        const { name, value } = event.target;
        if(isNaN(value)) {
            console.log('value must be a number.');
            return;
        }
        if(Number.isInteger(value)) {
            console.log('value must be an integer.');
            return;
        }
        if(value <= 0) {
            console.log('value must be greater than 0');
            return;
        }
        if(value > MAX_SUPPLY) {
            console.log('value exceded max supply.');
            return;
        }
        this.setState({ [name]: value });
        console.log('updated value');
    }
    render(){
        return (
            <Form onSubmit={this.handleSubmit}>
                <InputGroup size={'lg'} className={'mb-3'}>
                    <FormControl name="tokenCount" placeholder={'Tokens'} aria-label={'Tokens'} aria-describedby={'Tokens'} onChange={this.handleInputChange} />
                    <Button type="submit" variant="primary" id="buy-token-btn">Buy Tokens</Button>
                </InputGroup>
            </Form>
        );
    }    
}

export default IcoForm;