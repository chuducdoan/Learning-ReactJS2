import { Component } from "react";
import dataGlasses from '../Data/dataGlasses.json';

class BaiTapThuKinh extends Component {
    state = { 
        glassesCurrent: {
            "id": 2,
            "price": 50,
            "name": "GUCCI G8759H",
            "url": "./glassesImage/v2.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        }
     }

    renderGlassList = () => {
        return dataGlasses.map((glassesItem, index) => {
            return <img onClick={() => this.changeGlasses(glassesItem)} key={index} src={glassesItem.url} alt={glassesItem.name} className="mx-2 p-2 border border-width-1" 
            style={{width: '110px', cursor: 'pointer'}}/>
        })
    }

    changeGlasses = (newGlass) => {
        this.setState({glassesCurrent: newGlass});
    }

    render() { 

        const keyFrame = `@keyframes animChangeGlasses${Date.now()} {
            from {
                width: 0;
                transform: rotate(45deg);
                opacity: 0
            }
            to {
                width: 144px;
                transform: rotate(0deg);
                opacity: 0.7
            }
        }`

        const styleGlasses = {
            width: '144px',
            top: '59px',
            right: '28px',
            opacity: '0.8',
            transform: 'rotate(0deg)',
            animation: `animChangeGlasses${Date.now()} 2s`
        }

        const styleInfo = {
            width: '200px',
            textAlign: 'left',
            backgroundColor: 'rgba(255, 127, 0, .5)',
            right: '0',
            top: '163px',
            height: '80px',
            paddingLeft: '10px'
        }

        return ( 
            <div style={{backgroundImage: 'url(./glassesImage/background.jpg)', backgroundSize: 'cover', minHeight: '1000px', backgroundPosition: 'center'}}>
                <style>
                    {keyFrame}
                </style>
                <div style={{backgroundColor: 'rgba(0,0,0,.8)', minHeight: '1000px'}}>
                    <h3 style={{backgroundColor: 'rgba(0, 0, 0, .3)'}} className="text-center text-light p-4">Try glasses app online</h3>
                    <div className="container">
                        <div className="row mt-5">
                            <div className="col-6 text-end">
                                <div className="position-relative">
                                    <img style={{width: "200px"}} src="./glassesImage/model.jpg" alt="model.jpg" />
                                    <img className="position-absolute" style={styleGlasses} src={this.state.glassesCurrent.url} alt={this.state.glassesCurrent.name} />
                                    <div className="position-absolute" style={styleInfo}>
                                        <p style={{color: '#AB82FF', marginBottom: '0', fontWeight: 'bold'}}>{this.state.glassesCurrent.name}</p>
                                        <p style={{fontSize: '13px'}}>{this.state.glassesCurrent.desc}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <img style={{width: "200px"}} src="./glassesImage/model.jpg" alt="model.jpg" />
                            </div>
                        </div>
                    </div>
                    <div className="bg-light container text-center mt-5 d-flex justify-content-center py-4">
                        {this.renderGlassList()}
                    </div>
                </div>
            </div>
         );
    }
}
 
export default BaiTapThuKinh;