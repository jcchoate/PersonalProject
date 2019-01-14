import React, { Component } from 'react'
import './Card.css'
import axios from 'axios'

class Card extends Component {
    constructor() {
        super()

        this.state = {
            box: [],
            items: [],
            name: '',
            price: '',
            imageAddress: '',
            changer: true
        }
        this.reset = this.reset.bind(this)
        this.editBtn = this.editBtn.bind(this)
    }
    reset() {
        this.setState(prevState => ({
            changer: false,
        }))
    }
    editBtn(id){
        this.props.editItemFn(id)
        this.setState({
            changer: true
        })
    }
    
    render() {

        let { image, name, price, deleteItem, id } = this.props
        // console.log(this.state.changer)
        let edited = null
        console.log(this.props)
        return (


            <div className="cart">
                <div className="product-picure">
                    <img alt="cart item" className="picture" src={image} />
                </div>
                <div onClick={this.reset} className="cart-column">
                    {this.state.changer ?
                        <h2 className="product-name">
                            {name ? name : null}
                        </h2> :
                        <div>
                        <input onChange={
                            e => this.setState({
                                name: e.target.value
                            })} placeholder="New Name"></input>
                            <button onClick={this.editBtn}></button>
                            </div>
                    }
                    <label className="quantity">
                        <span aria-hidden="true">Qty: 1</span>
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