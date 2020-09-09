import React, { Component } from 'react';
import './style.css';
import { Button, message } from 'antd';
import currencyType from '../../assets/curTypes/curTypes';
import axios from 'axios';
import currencyApi from '../../assets/API/api';

export default class Home extends Component {
    state = {
        inputValue: 0,
        outPutValue: 0,
        inputDropDown: null,
        outputDropDown: null,
        isloading: false
    }
    handleChange = (event) => {
        const value = event.target.value;
        this.setState({
            ...this.state,
            [event.target.name]: value
        })
    }
    handleSubmit = async () => {
        const { inputValue, inputDropDown, outputDropDown } = this.state
        if (inputValue !== 0 && inputDropDown !== null && outputDropDown !== null) {
            this.setState({
                isloading: true
            })
            try {
                const res = await axios.get(`${currencyApi}?amount=${inputValue}&from=${inputDropDown}&to=${outputDropDown}`);
                if (res && res.data && res.data.rates) {
                    this.setState({
                        ...this.state,
                        outPutValue: res["data"]["rates"][outputDropDown],
                        isloading: false
                    })
                }
            } catch (err) {
                if (err.response && err.response.data === "" || err && !err.response) {
                    message.error('Sorry! Failed to fetch data')
                }
                this.setState({
                    inputValue: 0,
                    outPutValue: 0,
                    inputDropDown: null,
                    outputDropDown: null,
                    isloading: false
                })
            }
        } else {
            message.error('please fill all details')
        }
    }

    render() {
        return (
            <div className="homeComponent">
                <div className="inputContainer">
                    <h2>
                        Input Amount
                </h2>
                    <input placeholder="Enter Amount" type='number' name="inputValue" onChange={this.handleChange} value={this.state.inputValue} style={{ display: 'block' }} />
                    <select onChange={this.handleChange} name="inputDropDown" value={this.state.inputDropDown}>
                        {currencyType.map((item, index) => (
                            <option key={index} value={item}>
                                {item}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="convertContainer">
                    {this.state.isloading ? <Button>
                        Converting...
      </Button> :
                        <Button onClick={this.handleSubmit}>
                            Convert
</Button>
                    }
                </div>
                <div className="outputContainer">
                    <h2>
                        Output Amount
                </h2>
                    <input placeholder="Enter Amount" type='number' name="outPutValue" value={this.state.outPutValue} style={{ display: 'block' }} readOnly />
                    <select onChange={this.handleChange} value={this.state.outputDropDown} name="outputDropDown" >
                        {currencyType.map((item, index) => (
                            <option key={index} value={item}>
                                {item}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        )
    }
}
