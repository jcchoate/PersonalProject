import React, { Component } from 'react';
import axios from 'axios'

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
                })
            .then((res) => {
                this.setState({ items: res.data })
                console.log('hit')
            })
    }
    render() {
        return (
            <div className="upad">
                <h1>UPHONE</h1>
                <button className="addToCart" onClick={()=>this.addItemFn()}>Add to bag</button>
            </div>
        );
    }
}

export default Uphone;