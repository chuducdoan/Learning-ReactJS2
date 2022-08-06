import { Component } from 'react';

class HandleEvent extends Component {
    
    handleClick = () => {
        alert('Hello Bob');
    }

    render() { 
        return ( 
            <div>
                <button onClick={this.handleClick}>Click me!</button>
            </div>
         );
    }
}
 
export default HandleEvent;