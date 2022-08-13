import { Component } from "react";
import dataPhone from '../../Data/dataPhone.json';
import ProductItemEXC from './ProductItemEXC';

class ProductListEXC extends Component {
    state = {  }

    mangSanPham = dataPhone;

    renderSanPham = () => {
        return this.mangSanPham.map((sanPham, index) => {
            return <div key={index} className="col-3 mt-3">
                    <ProductItemEXC sanPham={sanPham}/>
                </div>
        })
    }

    render() { 
        return ( 
            <div className="container">
                <div className="text-center">DANH SACH SAN PHAM</div>
                <div className="row">
                    {this.renderSanPham()}
                </div>
            </div>
         );
    }
}
 
export default ProductListEXC;