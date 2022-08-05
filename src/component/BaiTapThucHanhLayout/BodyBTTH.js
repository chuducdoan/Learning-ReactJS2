import {Component} from 'react';
import BannerBTTH from './BannerBTTH';
import ItemBTTH from './ItemBTTH';

class BodyBTTH extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <div className='container'>
                <BannerBTTH/>
                <div className='row py-4'>
                    <div className='col-3'>
                        <ItemBTTH/>
                    </div>
                    <div className='col-3'>
                        <ItemBTTH/>
                    </div>
                    <div className='col-3'>
                        <ItemBTTH/>
                    </div>
                    <div className='col-3'>
                        <ItemBTTH/>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default BodyBTTH;