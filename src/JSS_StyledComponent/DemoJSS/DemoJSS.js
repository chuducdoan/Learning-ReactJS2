import { Component } from "react";
import { Button, SmallButton } from "../Components/Button";
import { TextField } from "../Components/TextField";
import { StyledLink } from "../Components/Link";

class DemoJSS extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <div>
                <Button>Hello Khai</Button>
                <SmallButton>Small button</SmallButton>
                <StyledLink id="text">Doan</StyledLink>
                <TextField/>
            </div>
         );
    }
}
 
export default DemoJSS;