import React, { Component } from 'react'
import axios from 'axios'
import Card from './Card'
import Price from './../Price'
class Items extends Component {
    constructor() {
        super()
        this.state = {
            items: [],
            name: '',
            price: '',
            imageAddress: '',
        }
        this.deleteItem = this.deleteItem.bind(this)
        this.add = this.add.bind(this)
        this.sub = this.sub.bind(this)

    }

    componentDidMount() {
        axios.get('/items').then((res) => {

            console.log(res.data)
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
        console.log("editeditem", editedItem)
        axios.put(`/items/${id}`, editedItem).then(response => {
            console.log(response)
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

    render() {
        console.log(this.state)
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
                    {this.state.items[0] ? <button className="checkout">Check Out</button> : null}
                </div>

            </div>
        )
    }
}
export default Items