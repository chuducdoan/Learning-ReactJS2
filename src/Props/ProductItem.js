import { Component } from "react";

class ProductItem extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="card w3-container w3-center w3-animate-zoom">
                <img className="card-img-top" src={this.props.product.image} alt={this.props.product.name}/>
                <div className="card-body text-start">
                    <h4 style={{fontSize: '16px'}} className="card-title">{this.props.product.name}</h4>
                    <p className="card-text">{this.props.product.price}</p>
                    <button className="w3-button w3-black">View Detail</button>
                </div>
            </div>
         );
    }
}
 
export default ProductItem;