import React, { Component } from 'react'
import './Card.css'
import axios from 'axios'

class NavCard extends Component {
    constructor() {
        super()

        this.state = {
            changer: true,
        }
        this.reset = this.reset.bind(this)
        this.editBtn = this.editBtn.bind(this)
    }
    reset() {
        this.setState(prevState => ({
            changer: false,
        }))
    }
    


    render() {

        let { image, name, id } = this.props
        let edited = null
        return (
            <div className="cart-small">
                <div className="product-picure-small">
                    <img alt="cart item" className="picture-small" src={image} />
                </div>
                <div onClick={this.reset} className="cart-column-small">

                    <h2 className="product-name-small">
                        {name ? name : null}
                    </h2>
                    <label className="quantity-small">
                        <span aria-hidden="true">Qty: {this.props.quantity}</span>
                    </label>
                    <div className="pricedetails">
                        <p className="price">{price ? price : null}</p>
                    </div>
                    <div className="cartline"></div>
                    <div classname="giftline">
                    </div>
                </div>
            </div>

        )



    }
}
export default NavCard