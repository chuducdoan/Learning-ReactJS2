import { Component } from "react";
import dataPhone from '../Data/dataPhone.json';
import SanPham from './SanPham';

class DanhSachSanPham extends Component {
    state = { 
        sanPhamChiTiet: {
            "maSP": 1, 
            "tenSP": "VinSmart Live", 
            "manHinh": "AMOLED, 6.2, Full HD+", 
            "heDieuHanh": "Android 9.0 (Pie)", 
            "cameraTruoc": "20 MP", "cameraSau": 
            "Chính 48 MP & Phụ 8 MP, 5 MP", 
            "ram": "4 GB", "rom": "64 GB", 
            "giaBan": 5700000, 
            "hinhAnh": "./img/vsphone.jpg"
        }
     }

    mangSanPham = dataPhone;

    renderSanPham = () => {
        return this.mangSanPham.map((sanPham, index) => {
            return <div key={index} className="col-4 mt-3">
                    <SanPham sanPham={sanPham} onChangSanPham={this.changeSanPham}/>
                </div>
        })
    }

    changeSanPham = (newProduct) => {
        this.setState({
            sanPhamChiTiet: newProduct
        })
    }

    render() { 
        return ( 
            <div className="container-fluid">
                <div className="display-4 text-center">DANH SACH SAN PHAM</div>
                <div className="row">
                    {this.renderSanPham()}
                </div>
                <div className="row">
                    <div className="col-4">
                        <img style={{width: '100%'}} src={this.state.sanPhamChiTiet.hinhAnh} alt={this.state.sanPhamChiTiet.tenSP} />
                    </div>
                    <div className="col-8">
                        <h3 className="text-start">Thong so ky thuat</h3>
                        <table className="table text-start">
                            <thead>
                                <tr>
                                    <th>Man hinh</th>
                                    <td>{this.state.sanPhamChiTiet.manHinh}</td>
                                </tr>
                                <tr>
                                    <th>He dieu hanh</th>
                                    <td>{this.state.sanPhamChiTiet.heDieuHanh}</td>
                                </tr>
                                <tr>
                                    <th>Camera truoc</th>
                                    <td>{this.state.sanPhamChiTiet.cameraTruoc}</td>
                                </tr>
                                <tr>
                                    <th>Camera sau</th>
                                    <td>{this.state.sanPhamChiTiet.cameraSau}</td>
                                </tr>
                                <tr>
                                    <th>Ram</th>
                                    <td>{this.state.sanPhamChiTiet.ram}</td>
                                </tr>
                                <tr>
                                    <th>Rom</th>
                                    <td>{this.state.sanPhamChiTiet.rom}</td>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default DanhSachSanPham;