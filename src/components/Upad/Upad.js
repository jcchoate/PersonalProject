import React, { Component } from 'react';
import axios from 'axios'
import './Updad.css'
import upadimg from "./../../UPAD.png"

class Upad extends Component {
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
                    name: 'uPad',
                    price: '559.00',
                    imageAddress: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/image/AppleInc/aos/published/images/i/pa/ipad/cell/ipad-cell-select-gold-201803_GEO_US?wid=800&hei=800&fmt=jpeg&qlt=80&op_usm=0.5,1.5&fit=constrain&.v=1538432988206',
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
                    <h2>uPad</h2>
                    <div className="options">
                        <p>Overview</p>
                        <p>iOS</p>
                        <p>Tech Specs</p>
                        <button className="addToCart" onClick={() => this.addItemFn()}>Buy</button>
                    </div>

                </div>
                <div className="line"></div>
                <div className="effects">
                    <h1 className="name">uPad</h1>
                    <h2>Big space.</h2>
                    <h2>Small weight.</h2>
                    <h2>For your biggest projects.</h2>
                    <div classname="pad-wrapper">
                        <img src={upadimg} className="upad-image"></img>
                    </div>
                </div>
            </div>
        );
    }
}

export default Upad;