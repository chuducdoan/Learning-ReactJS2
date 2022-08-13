import { Component } from "react";
import ChildComponent from "./ChildComponent";

class LifeCycleReact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 1
        }
    }

    // duoc goi khi component nay duoc su dung tren DOM
    static getDerivedStateFromProps(newProps, currentState) {
        console.log('getDerivedStateFromProps')
        return null;
    }

    // Duoc goi khi setState hoac props
    shouldComponentUpdate(newProps, newState) {
        console.log("shouldComponentUpdate")
        // return true thi chay tiep cac lifecycle con lai, nguoc lai return false thi dung lai khong chay tiep cac lifecycle khac
        return true;
    }

    render() { 
        return ( 
            <div>
                <h1>Parent Component</h1>
                <span>Number: {this.state.number}</span>
                <br/>
                <button className="btn btn-success" onClick={() => this.setState({number: this.state.number+1})}>
                    Add
                </button>
                {this.state.number > 1 ? '' : <ChildComponent/>}
            </div>
         );
    }

    // duoc goi sau render va chi chay mot lan duy nhat (trang thai mounting)
    componentDidMount() {
        console.log('componentDidMount')
    }

    // lan dau se khong chay, chi goi khi setState hoac thay doi prop
    componentDidUpdate(prevProp, preState) {
        console.log('componentDidUpdate')
    }
}
 
export default LifeCycleReact;