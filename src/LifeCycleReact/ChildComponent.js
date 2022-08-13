import { Component } from "react";

class ChildComponent extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }

    static getDerivedStateFromProps(newProp, currentState) {
        console.log('getDerivedStateFromProps cua component con')
        return null;
    }

    render() { 
        return ( 
            <div>child</div>
         );
    }

    componentDidMount() {
        console.log("componentDidMount child")
    }

    componentWillUnmount() {
        console.log("component unmount")
    }
}
 
export default ChildComponent;