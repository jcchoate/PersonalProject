import React, { Component } from 'react'

export default class Orders extends Component {
    constructor(){
        super()

        this.state={
            items=[]
        }
    }
    componentDidMount() {
        axios.get('/orders').then((res) => {

            console.log(res.data)
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
                image={item.imageAddress}
                name={item.name}
                price={item.price}
                id={item.id}

            />)
        })
    }
    return (
        <div className="cartItems">
        <div className="info-top">
            <img alt="box" className="littleBox" src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/image/AppleInc/aos/published/images/d/el/delivery/message/delivery-message-banner?wid=38&hei=42&fmt=png-alpha&qlt=80&.v=1515024377276" />

        </div>
        <div className="inthebag">
            <h1 className="bagheader">Here's what's in your bag.</h1>
            <p>Free delivery and free returns</p>
        </div>
        <div className="itemCards">
            {cards}
        </div>
        <Price items={this.state.items} />
        <div className="buttoncont">
            {this.state.items[0] ? <button className="checkout">Check Out</button> : null}
        </div>

    </div>
    )
  }
}
