import React, { Component } from 'react'
import axios from 'axios'
import Card from './../Cart/Card'
import Price from './../Price'
import './Orders.css'

export default class Orders extends Component {
    constructor(){
        super()

        this.state={
            items:[]
        }
    }
    componentDidMount() {
        axios.get('/orders').then((res) => {
            this.setState({
                items: res.data,
            })
        }
        )
    }
  render() {
    let cards = "Your bag is empty"
    if (this.state.items[0]) {
        cards = this.state.items.map((item) => {
            return (<Card
                image={item.image_url}
                name={item.product_name}
                price={item.price}
                id={item.id}
                quantity={item.product_quantity}

            />)
        })
    }
    return (
        <div className="cartItems">
        <div className="info-top">
            <img alt="box" className="littleBox" src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/image/AppleInc/aos/published/images/d/el/delivery/message/delivery-message-banner?wid=38&hei=42&fmt=png-alpha&qlt=80&.v=1515024377276" />
        </div>
        <div className="inthebag">
            <h1 className="bagheader">Here's your recent orders.</h1>
        </div>
        <div className="itemCards">
            {cards}
        </div>
        <Price items={this.state.items} />
        <div className="buttoncont">
        </div>

    </div>
    )
  }
}
