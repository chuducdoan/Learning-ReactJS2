import { Component } from "react";
import { Container } from "../../Components/Container/Container";
import {ThemeProvider} from 'styled-components';
import { ToDoListDarkTheme } from './../../Themes/ToDoListDarkTheme';

class ToDoList extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <ThemeProvider theme={ToDoListDarkTheme}>
                <Container>
                    dasj
                </Container>
            </ThemeProvider>
         );
    }
}
 
export default ToDoList;