import { Component } from "react";
import {connect} from 'react-redux';

class CartModal extends Component {
    state = {  }

    renderGioHang = () => {
        return this.props.gioHang.map((cart, index) => {
            return <tr key={index}>
                        <td>{cart.maSP}</td>
                        <td>
                            <img style={{width: '100px'}} src={cart.hinhAnh} alt={cart.hinhAnh} />
                        </td>
                        <td>{cart.tenSP}</td>
                        <td>{cart.soLuong}</td>
                        <td>{cart.donGia.toLocaleString()}</td>
                        <td>{(cart.soLuong*cart.donGia).toLocaleString()}</td>
                        <td><button className="btn btn-danger" onClick={() => this.props.xoaGioHang(cart.maSP)}>Xoa</button></td>
                    </tr>
        })
    }

    render() { 
        return ( 
            <div>
                <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div style={{minWidth: '1000px'}} className="modal-dialog" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Ma SP</th>
                                        <th>Hinh anh</th>
                                        <th>Ten SP</th>
                                        <th>So luong</th>
                                        <th>Don gia</th>
                                        <th>Thanh tien</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.renderGioHang()}
                                </tbody>
                            </table>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}

const mapStateToProps = state => {
    return {
        gioHang: state.stateGioHang.gioHang
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        xoaGioHang: (maSanPham) => {
            let action = {
                type: 'XOA_GIO_HANG',
                payload: maSanPham
            }
            dispatch(action)
        }
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(CartModal);