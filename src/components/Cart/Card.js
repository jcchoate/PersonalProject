import React, { Component } from 'react'
import './Card.css'
import axios from 'axios'

class Card extends Component {
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
    editBtn(id) {
        this.props.editItemFn(id)
        this.setState({
            changer: true
        })
    }


    render() {

        let { image, name, price, deleteItem, id } = this.props
        let edited = null
        return (


            <div className="cart">
                <div className="product-picure">
                    <img alt="cart item" className="picture" src={image} />
                </div>
                <div onClick={this.reset} className="cart-column">

                    <h2 className="product-name">
                        {name ? name : null}
                    </h2>
                    <label className="quantity">
                        <span aria-hidden="true">Qty: {this.props.quantity}</span>
                        {this.props.add ?
                            <div>
                                <button className="math" onClick={() => this.props.add(id)}>+</button>
                                <button className="math" onClick={() => this.props.sub(id)}>-</button>
                            </div>
                            :
                            null
                        }
                    </label>
                    <div className="pricedetails">
                        <p className="price">{price ? price : null}</p>
                    </div>
                    {deleteItem ? <p className="cartlink" onClick={deleteItem}>Remove</p> : null}
                    <div className="cartline"></div>
                    <div classname="giftline">
                    </div>
                </div>
            </div>

        )



    }
}
export default Card