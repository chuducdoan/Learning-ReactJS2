import { Component } from "react";

class BaiTapChonXe extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="container-fluid">
                <div className="row">
                    <div className="col-7">
                        <img style={{width: "100%"}} src={require('../assets/products/black-car.jpg')} alt="black-car"/>
                    </div>
                    <div className="col-5">
                        <div className="card text-dark text-start">
                            <div className="card-header text-primary">Exterior Color</div>
                            <div className="card-body">
                                <div className="row border border-link py-2 mt-2" style={{cursor: 'pointer'}}>
                                    <div className="col-2">
                                        <img src={require('../assets/icons/icon-black.jpg')} alt="icon-black" style={{width: "100%"}}/>
                                    </div>
                                    <div className="col-10">
                                        <h3>Crystal Black</h3>
                                        <p>Pearl</p>
                                    </div>
                                </div>
                                <div className="row border border-link py-2 mt-2" style={{cursor: 'pointer'}}>
                                    <div className="col-2">
                                        <img src={require('../assets/icons/icon-red.jpg')} alt="icon-black" style={{width: "100%"}}/>
                                    </div>
                                    <div className="col-10">
                                        <h3>Crystal Black</h3>
                                        <p>Pearl</p>
                                    </div>
                                </div>
                                <div className="row border border-link py-2 mt-2" style={{cursor: 'pointer'}}>
                                    <div className="col-2">
                                        <img src={require('../assets/icons/icon-silver.jpg')} alt="icon-black" style={{width: "100%"}}/>
                                    </div>
                                    <div className="col-10">
                                        <h3>Crystal Black</h3>
                                        <p>Pearl</p>
                                    </div>
                                </div>
                                <div className="row border border-link py-2 mt-2" style={{cursor: 'pointer'}}>
                                    <div className="col-2">
                                        <img src={require('../assets/icons/icon-steel.jpg')} alt="icon-black" style={{width: "100%"}}/>
                                    </div>
                                    <div className="col-10">
                                        <h3>Crystal Black</h3>
                                        <p>Pearl</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default BaiTapChonXe;