import React, { Component } from 'react'
import './Cart.css'

class Card extends Component {
    constructor() {
        super()

        this.state = {
            box: [],
            items: [],
            name: '',
            price: '',
            imageAddress: '',
        }
    }
    reset() {
        this.props.editItemFn(this.props.item.id, this.state.price)
        this.setState(prevState => ({
            changer: !prevState.changer,
            price: ''
        }))
    }
    render() {

        let {image, name, price, deleteItem} = this.props
        // console.log(this.state.changer)
        let edited = null
        console.log(this.props)
        return (

            
            <div className="cart">
                    <div className="product-picure">
                        <img alt="cart item" className="picture" src={image} />
                    </div>
                    <div className="cart-column">
                        <h2 className="product-name">
                            {name ? name: null}
                        </h2>
                        <label className="quantity">
                        <span aria-hidden="true">Qty: 1</span>
                        </label>
                        <div className="pricedetails">
                            <p className="price">{price ? price: null}</p>
                        </div>
                        {deleteItem ? <p className="cartlink" onClick={deleteItem}>Remove</p>: null}
                        <div className="cartline"></div>
                        <div classname="giftline">
                        <svg width="24" height="24" class="as-svgicon as-svgicon-gift as-svgicon-16 as-svgicon-gift16" role="img" aria-hidden="true"><defs><style>.gift16-cls-1</style></defs><path class="gift16-cls-1" d="M12.01 4.5v15M19.51 12h-15M8.18 16.41a6.59 6.59 0 0 0 3.67-4.25M12.16 12.16a6.59 6.59 0 0 0 3.67 4.25M7.47 9c0 3.26 4.45 2.89 4.45 2.89.01-5.38-4.45-5.37-4.45-2.89zM12.08 11.91s4.45.36 4.45-2.89c.01-2.5-4.45-2.51-4.45 2.89z"></path><path fill="none" d="M.01 0h24v24h-24z"></path><path class="gift16-cls-1" d="M19.51 5.8a1.19 1.19 0 0 0-1.32-1.3H5.83a1.17 1.17 0 0 0-1.32 1.3v12.4c0 .89.41 1.3 1.32 1.3h12.35a1.18 1.18 0 0 0 1.32-1.3z"></path></svg>
                        </div>
                    </div>
            </div>

)



}
}
export default Card