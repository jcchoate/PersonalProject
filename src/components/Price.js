import React, {Component} from 'react'
import './Cart/Cart.css'

class Price extends Component {
    
    
    render(){
        console.log(this.props.items)
        let sum = this.props.items.reduce((total,value)=>{
            console.log(value)

            return total + parseInt(value.price)
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