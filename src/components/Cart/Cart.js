import React, { Component } from 'react'
import axios from 'axios'
import Card from './Card'
import Price from './../Price'
import { HashRouter, Switch, Route, Link } from "react-router-dom";



class Items extends Component {
    constructor() {
        super()
        this.state = {
            items: [],
            name: '',
            price: '',
            imageAddress: '',
            orders: []
        }
        this.deleteItem = this.deleteItem.bind(this)
        this.add = this.add.bind(this)
        this.sub = this.sub.bind(this)
        this.sendOrder = this.sendOrder.bind(this)

    }

    componentDidMount() {
        axios.get('/items').then((res) => {

            this.setState({
                items: res.data,
            })
        }
        )
    }
    add(id) {
        axios.put(`/items/add/${id}`).then(response => {
            this.setState({
                items: response.data
            })
        })
    }
    sub(id) {
        axios.put(`/items/sub/${id}`).then(response => {
            this.setState({
                items: response.data
            })
        })
    }
    editItemFn(id, name) {
        let editedItem = {
            name: this.state.name
        }
        axios.put(`/items/${id}`, editedItem).then(response => {
            this.setState({
                items: response.data,
                changer: true
            })

        })
    }

    deleteItem(id) {
        axios.delete(`/items/${id}`).then(response => {
            this.setState({
                items: response.data
            })
        })
    }
    
    sendOrder(){
        let orders = this.state.items
        axios.post('/orders', orders).then(response => {
        })
    }

    render() {
        let cards = "Your bag is empty"
        if (this.state.items[0]) {

            cards = this.state.items.map((item) => {
                return (<Card
                    deleteItem={this.deleteItem}
                    editItemFn={this.editItemFn}
                    add={this.add}
                    sub={this.sub}
                    image={item.imageAddress}
                    name={item.name}
                    price={item.price}
                    id={item.id}
                    quantity={item.quantity}

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
                    {this.state.items[0] ? 
                    <Link to="/orders">
                    <button onClick={this.sendOrder} className="checkout">Check Out</button> 
                    </Link>
                    : null}
                </div>

            </div>
        )
    }
}
export default Items