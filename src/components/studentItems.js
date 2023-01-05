import React from "react";
import {Card} from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import axios from "axios";
import studentimg from './studentimg.png';
import "./CardStyle.css";

export class StudentItems extends React.Component{

    constructor(){
        super();
        this.DeleteStudent = this.DeleteStudent.bind(this);
    }

    DeleteStudent(e){
        e.preventDefault();

        axios.delete('http://localhost:4000/api/student/'+this.props.student._id)
        .then((res)=>{this.props.Reload();})
        .catch();
    }

    render() {
        return (
            <div>
                <center>
                <Card style={{ width: '18rem' }}>
                <Card.Header><h6>{this.props.student.name} {this.props.student.surname}</h6></Card.Header>
                    <Card.Body>
                        <Card.Img src={studentimg} alt="student image" />
                        <Card.Text>
                        <hr></hr>
                        <p>Age:  {this.props.student.age}</p>
                        <p>Student Number:  {this.props.student.number}</p>
                        <p>Course:  {this.props.student.course}</p>
                        <p>Year:  {this.props.student.yearofstudy}</p>
                        <hr></hr>
                        </Card.Text>
                    </Card.Body>
                    <Link to={"/edit/"+this.props.student._id} className="btn btn-edit btn-success">Edit</Link>
                    <h1></h1>
                    <Button variant="danger" onClick={this.DeleteStudent}>Delete</Button>
                 </Card>
                 <br/>
                </center>
            </div>
        );
    }
}