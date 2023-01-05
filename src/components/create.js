import React from "react";
import axios from "axios";
import Card from 'react-bootstrap/Card';

export class Create extends React.Component {

    // important bind events from each onChange attributes
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeStudentName = this.onChangeStudentName.bind(this);
        this.onChangeStudentSurname = this.onChangeStudentSurname.bind(this);
        this.onChangeStudentNumber = this.onChangeStudentNumber.bind(this);
        this.onChangeStudentCourse = this.onChangeStudentCourse.bind(this);
        this.onChangeStudentAge = this.onChangeStudentAge.bind(this);
        this.onChangeStudentYearOfStudy = this.onChangeStudentYearOfStudy.bind(this);



        this.state = {
            name: '',
            surname: '',
            number: '',
            course: '',
            age: '',
            yearofstudy: ''

        }
    }

    // taking event when click the submit button in the form
    handleSubmit(e) {
        e.preventDefault();
        console.log(`Student Added
       Name: ${this.state.name}
       Surname: ${this.state.surname}
       Number: ${this.state.number}
       Course: ${this.state.course}
       Age: ${this.state.age}
       Year of Study: ${this.state.yearofstudy}`);

        const student = {
          name:this.state.name,
          surname:this.state.surname,
          number:this.state.number,
          course:this.state.course, 
          age:this.state.age,
          yearofstudy:this.state.yearofstudy,
        }

        axios.post('http://localhost:4000/api/students',student)
        .then()
        .catch();

        this.setState({
            name: '',
            surname: '',
            number: '',
            course: '',
            age: '',
            yearofstudy: ''
        })
    }

    // when the value in the field changes, this event will triger.
    onChangeStudentName(e) {
        this.setState({
            name: e.target.value
        })
    }

    onChangeStudentSurname(e) {
        this.setState({
            surname: e.target.value
        })
    }

    onChangeStudentNumber(e) {
        this.setState({
            number: e.target.value
        })
    }

    onChangeStudentAge(e) {
        this.setState({
            age: e.target.value
        })
    }

    onChangeStudentCourse(e) {
        this.setState({
            course: e.target.value
        })
    }

    onChangeStudentYearOfStudy(e) {
        this.setState({
            yearofstudy: e.target.value
        })
    }

    render() {
        return (
            // Insert HTML code in the div element
            <div >
                <br></br>
                <h3>New Student Form</h3>
                <br></br>
                <center>
                <form onSubmit={this.handleSubmit}>
                    <Card style={{ width: '18rem' }}>
                    <div className="form-group">
                        <label>First Name </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.name}
                            onChange={this.onChangeStudentName}
                        />
                    </div>
                    <br></br>

                    <div className="form-group">
                        <label>Last Name </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.surname}
                            onChange={this.onChangeStudentSurname}
                        />
                    </div>
                    <br></br>

                    <div className="form-group">
                        <label>Age </label>
                        <input type="number"
                            className="form-control"
                            value={this.state.age}
                            onChange={this.onChangeStudentAge}
                        />
                    </div>
                    <br></br>

                    <div className="form-group">
                        <label>Student Number </label>
                        <input type="number"
                            className="form-control"
                            value={this.state.number}
                            onChange={this.onChangeStudentNumber}
                        />
                    </div>
                    <br></br>

                    <div className="form-group">
                        <label>Course </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.course}
                            onChange={this.onChangeStudentCourse}
                        />
                    </div>
                    <br></br>

                    <div className="form-group">
                        <label>Year of Study </label>
                        <input type="number"
                            className="form-control"
                            value={this.state.yearofstudy}
                            onChange={this.onChangeStudentYearOfStudy}
                        />
                    </div>
                    </Card>
                    <br></br>
                    <input type="submit" value="Add Student" className="btn btn-success" />
                </form>
                </center>
            </div>
            


        )
    }
}