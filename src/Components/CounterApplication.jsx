import React, { Component } from "react";
class CounterApplication extends Component{
    constructor(){
        super();
        this.state={
            quantity:0,
            showMessage: false
        }
    }
    incrementQuantity(){
        this.setState({
            quantity:this.state.quantity+1,
            showMessage: false
        })
    }
    decrementQuantity(){
        if( this.state.quantity > 0 ){
            this.setState({
                quantity:this.state.quantity-1,
                showMessage: false
            })
        }else{
            this.setState({
                showMessage: true
            })
        }
    }
    render(){
        return(
            <div>
                <div className="card">
                    <button onClick={() => this.decrementQuantity()}>-</button>
                    <div className="total_count">{this.state.quantity}</div>
                    <button onClick={() => this.incrementQuantity()}>+</button>
                </div>
                {this.state.showMessage &&(
                    <div className="error">You can not select less then 0 value.</div>   
                )}
            </div>
        )
    }
}

export default CounterApplication