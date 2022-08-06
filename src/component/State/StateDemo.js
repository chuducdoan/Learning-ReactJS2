import { Component } from "react";

class StateDemo extends Component {
    // state: la thuoc tinh co san cua react class
    state = {
        status: false
    }
    // setState la phuong thuc co san cua react class component giup thay doi gia tri state va render lai giao dien

    userLogin = {
        name: 'DoanChu',
        age: 20
    }

    login = () => {
        let newState = {
            status: true
        }
        // setState la phuong thuc bat dong bo, trong luc no thuc thi no van chay nhung ham khac => console ko can doi setState ma no van chay tiep
        // Tham so thu 2 cua setState la callback function, khi state duoc thay doi thi no se chay tiep callback
        this.setState(newState, () => {
            console.log(this.state.status);
        });
        console.log(this.state.status)
    }

    renderUserLogin = () => {
        if(this.state.status) {
            return <div className="text-center">{this.userLogin.name}</div>
        }
        return <button onClick={() => {this.login()}}>Dang nhap</button>
        
    }
    
    render() { 
        return ( 
            <div>
                {this.renderUserLogin()}
            </div>
         );
    }
}
 
export default StateDemo;