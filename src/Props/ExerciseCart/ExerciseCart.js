import { Component } from "react";
import CartModal from './CartModal';
import ProductListEXC from './ProductListEXC';
import { connect } from 'react-redux';

class ExerciseCart extends Component {
    state = { 
    }

    render() { 
        return ( 
            <div className="container">
                <h3>Bai tap gio hang</h3>
                <div className="text-end">
                    <span style={{width: '17px', cursor: 'pointer'}} data-toggle="modal" data-target="#exampleModalCenter">
                        <i className="fa fa-shopping-cart mr-5"></i>({this.props.gioHang.reduce((tong, spGH) => tong + spGH.soLuong, 0)}) Shopping Cart
                    </span>
                </div>
                <CartModal handleDeleteCart={this.xoaSanPhamGioHang}/>
                <ProductListEXC/>
            </div>
         );
    }
}

const mapStateToProps = state => {
    return {
        gioHang: state.stateGioHang.gioHang
    }
}
 
export default connect(mapStateToProps)(ExerciseCart);