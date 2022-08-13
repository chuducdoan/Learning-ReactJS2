import { Component } from "react";
import ProductItem from './ProductItem';

class ProductList extends Component {
    state = {  }

    renderProductItem = () => {
        return this.props.arrProduct.map((product, index) => {
            return <div key={index} className="col-4 mt-3">
                <ProductItem product={product}/>
            </div>
        })
    }

    render() { 
        return ( 
            <div className="row">
                {this.renderProductItem()}
            </div>
         );
    }
}
 
export default ProductList;