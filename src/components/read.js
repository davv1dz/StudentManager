import React from "react";
import { Students } from "./students";
import axios from "axios";

export class Read extends React.Component {


    constructor() {
        super();
        this.componentDidMount = this.componentDidMount.bind(this);
    }
   
    componentDidMount() {
        axios.get('http://localhost:4000/api/students')
            .then((response) => {
                this.setState({ students: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    state = {
        students: []
    }

    render() {
        return (
            <div>
                <br></br>
                <h3>All Registered Students</h3>
                <br></br>
                <Students students={this.state.students} Reload={this.componentDidMount}></Students>
            </div>
        );
    }
}