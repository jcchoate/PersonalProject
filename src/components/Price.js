import React, {Component} from 'react'
import './Cart/Cart.css'

class Price extends Component {
    
    
    render(){
        let sum = this.props.items.reduce((total,item)=>{
            return total + parseInt(item.price * (item.product_quantity || item.quantity))
        },0)
        return(
            <div className="price pricetotal">
                <span className="total">TOTAL:</span> 
                <div classname="sum">
                    ${sum}
                </div>
            </div>
        )
    }
}
export default Price