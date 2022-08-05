import {Component} from 'react';
import BodyBTTH from './BodyBTTH';
import FooterBTTH from './FooterBTTH';
import HeaderBTTH from './HeaderBTTH';

class BaiTapThucHanhLayout extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <div>
                <HeaderBTTH/>
                <BodyBTTH/>
                <FooterBTTH/>
            </div>
         );
    }
}
 
export default BaiTapThucHanhLayout;