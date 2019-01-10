import React, { Component } from 'react';
import axios from 'axios'

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
                })
            .then((res) => {
                this.setState({ items: res.data })
                console.log('hit')
            })
    }
    render() {
        return (
            <div className="upad">
                <h1>PACBOOKPRO</h1>
                <button className="addToCart" onClick={()=>this.addItemFn()}>Add to bag</button>
            </div>
        );
    }
}

export default PacbookPro;