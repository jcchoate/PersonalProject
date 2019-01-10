import React, {Component} from 'react'
import './Cart/Cart.css'

class Price extends Component {
    
    
    render(){
        let sum = this.props.items.reduce((total,value)=>{
            console.log(value)

            return total + parseInt(value.price)
        },0)
        return(
            <div className="price">
                <span className="total">TOTAL:</span> {sum}
            </div>
        )
    }
}
export default Price