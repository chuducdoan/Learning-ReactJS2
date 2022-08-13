import { Component } from "react";
import { connect } from 'react-redux';

class ProductItemEXC extends Component {
    state = {  }
    render() { 
        let {sanPham} = this.props;
        return ( 
            <div className="card w3-container w3-center w3-animate-zoom pt-2">
                <img className="card-img-top m-auto" style={{width: '100%', maxHeight: '215px'}} src={sanPham.hinhAnh} alt={sanPham.tenSP}/>
                <div className="card-body text-start">
                    <h4 style={{fontSize: '16px'}} className="card-title">{sanPham.tenSP}</h4>
                    <p className="card-text">{sanPham.giaBan.toLocaleString()}</p>
                    <button className="btn btn-success" onClick={() => this.props.addToCart(sanPham)}>Add to cart</button>
                </div>
            </div>
         );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (sanPham) => {
            let action = {
                type: 'THEM_GIO_HANG',
                payload: sanPham
            }
            return dispatch(action)
        }
    }
}
 
export default connect(null, mapDispatchToProps)(ProductItemEXC);