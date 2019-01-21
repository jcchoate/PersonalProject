import React, { Component } from 'react';
import axios from 'axios'
import './Pacbook.css'

class PacbookPro extends Component {
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
                    name: 'PacBook Pro',
                    price: '7548.98',
                    imageAddress: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/image/AppleInc/aos/published/images/M/BP/MBP15G/201807/MBP15G-201807?wid=800&hei=800&fmt=jpeg&qlt=80&op_usm=0.5,1.5&fit=constrain&.v=1531249595742',
                    id: 1
                })
            .then((res) => {
                this.setState({ items: res.data })
                console.log('hit')
            })
    }
    render() {
        return (
            <div className="PacbookMain">
                <div className="header">
                    <h2>Pacbook Pro</h2>
                    <div className="options">
                        <p>Overview</p>
                        <p>macOS</p>
                        <p>Tech Specs</p>
                        <button className="addToCart" onClick={() => this.addItemFn()}>Buy</button>
                    </div>

                </div>
                <div className="line"></div>
                <div className="effects">
                    <h1 className="name">PacBook Pro</h1>
                    <h2>More Power.</h2>
                    <h2>More Performance.</h2>
                    <h2>More Pro.</h2>
                    <div classname="pacbook-wrapper">
                        <div className="pacbook-image"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PacbookPro;