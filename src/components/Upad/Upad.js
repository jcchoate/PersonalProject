import React, { Component } from 'react';
import axios from 'axios'
import './Updad.css'

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
            <div className="upad">
                <h1>UPAD</h1>
                <button className="addToCart" onClick={()=>this.addItemFn()}>Add to bag</button>
            </div>
        );
    }
}

export default Upad;