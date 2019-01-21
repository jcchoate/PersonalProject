import React, { Component } from 'react';
import axios from 'axios'
import './Uphone.css'

class Uphone extends Component {
    constructor() {
        super()

        this.state = {
            items: [],

        }
    }
    addItemFn() {
        axios
            .post('/items',
                {
                    name: 'uPhone',
                    price: '1449.00',
                    imageAddress: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone/xs/iphone-xs-max-gold-select-2018?wid=800&hei=800&fmt=jpeg&qlt=80&op_usm=0.5,1.5&fit=constrain&.v=1541713822178',
                    id: 3
                })
            .then((res) => {
                this.setState({ items: res.data })
                console.log('hit')
            })
    }
    render() {
        return (
            <div className="UphoneMain">
                <div className="header">
                    <h2>uPhone XS</h2>
                    <div className="options">
                        <p>Overview</p>
                        <p>iOS</p>
                        <p>Tech Specs</p>
                        <button className="addToCart" onClick={() => this.addItemFn()}>Buy</button>
                    </div>

                </div>
                <div className="line"></div>
                <div className="effects">
                    <h1 className="name">uPhone XS</h1>
                    <h2>Light.</h2>
                    <h2>Smart.</h2>
                    <h2>Full of life.</h2>
                    <div classname="pacbook-wrapper">
                        <div className="uphone-image"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Uphone;