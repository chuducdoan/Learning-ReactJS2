import { Component } from "react";

class SanPham extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="card w3-container w3-center w3-animate-zoom pt-2">
                <img className="card-img-top m-auto" style={{width: '250px', height: '250px'}} src={this.props.sanPham.hinhAnh} alt={this.props.sanPham.tenSP}/>
                <div className="card-body text-start">
                    <h4 style={{fontSize: '16px'}} className="card-title">{this.props.sanPham.tenSP}</h4>
                    <p className="card-text">{this.props.sanPham.giaBan.toLocaleString()}</p>
                    <button className="w3-button w3-black" onClick={() => this.props.onChangSanPham(this.props.sanPham)}>View Detail</button>
                </div>
            </div>
         );
    }
}
 
export default SanPham;