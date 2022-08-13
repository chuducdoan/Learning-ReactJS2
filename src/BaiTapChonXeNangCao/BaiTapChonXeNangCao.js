import { Component } from "react";
import dataFeatures from '../Data/arrayFeatures.json'
import dataWheels from '../Data/wheels.json'

class BaiTapChonXeNangCao extends Component {
    state = {  }

    renderIcon = () => {
        return dataFeatures.map((item, index) => {
            return <div className="row border border-link py-2 mt-2" style={{cursor: 'pointer'}}>
                    <div className="col-2">
                        <img src={item.img} alt={index} style={{width: "100%"}}/>
                    </div>
                    <div className="col-10">
                        <h3>{item.title}</h3>
                        <p>{item.type}</p>
                    </div>
                </div>
        })
    }

    componentDidMount = () => {
        // Day la phuong thuc co san cua component, tu dong thuc thi sau khi render duoc goi
        // Luu y componentDidMount chi chay mot lan dau tien sau  khi render
        let tagScript = document.createElement('script');
        tagScript.src = 'https://cdn.scaleflex.it/plugins/js-cloudimage-360-view/3.0.3/js-cloudimage-360-view.min.js';
        document.querySelector('#appendScript').appendChild(tagScript);
    }

    renderWheels = () => {
        return dataWheels.map((item, index) => {
            return <div key={index} className="row border border-link py-2 mt-2" style={{cursor: 'pointer'}}>
                    <div className="col-2">
                        <img src={item.img} alt={index} style={{width: "100%"}}/>
                    </div>
                    <div className="col-10">
                        <h3>{item.title}</h3>
                        <p>{item.price}</p>
                    </div>
                </div>
        })
    }

    render() { 
        return ( 
            <div className="container-fluid">
                <div className="row">
                    <div className="col-6">
                        <div className="model">
                            {/* <img style={{width: '100%'}} src="./images/images-black/images-black-1/civic-1.jpg" /> */}
                            <div
                            className="cloudimage-360"
                            id="gurkha-suv"
                            data-folder="./images/images-black/images-black-1/"
                            data-filename-x="civic-{index}.jpg"
                            data-amount-x="73"
                            ></div>
                        </div>
                        <div id="appendScript">
                            
                        </div>
                        <table className="table border border-color-light">
                            <thead>
                                <tr>
                                    <th>Color</th>
                                    <th>Black</th>
                                </tr>
                                <tr>
                                    <th>Price</th>
                                    <th>$ 19.000,00</th>
                                </tr>
                                <tr>
                                    <th>Engine Type</th>
                                    <th>In-line-4-cylinder</th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                    <div className="col-6">
                        <div className="card text-dark text-start">
                            <div className="card-header text-primary">Exterior Color</div>
                            <div className="card-body">
                                {this.renderIcon()}
                            </div>
                        </div>
                        <div className="card text-dark text-start">
                            <div className="card-header text-primary">Wheels Color</div>
                            <div className="card-body">
                                {this.renderWheels()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default BaiTapChonXeNangCao;