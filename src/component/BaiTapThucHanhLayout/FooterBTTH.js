import {Component} from 'react';

class FooterBTTH extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <div>
                <footer class="py-5 bg-dark">
                    <div class="container"><p class="m-0 text-center text-white">Copyright © Your Website 2022</p></div>
                </footer>
            </div>
         );
    }
}
 
export default FooterBTTH;