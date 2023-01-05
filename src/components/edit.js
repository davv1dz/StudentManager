import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Card from 'react-bootstrap/Card';


export function Edit() {

    // The useParams hook returns an object of key/value pairs of
    // the dynamic params from the current URL that were matched by
    //the <Route path>.
    let { id } = useParams();

    // update arrays using the React useState()
    // and without the Array object's push() method
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [age, setAge] = useState("");
    const [number, setNumber] = useState("");
    const [course, setCourse] = useState("");
    const [yearofstudy, setYearOfStudy] = useState("");

    // useNavigate return a function that we can use to navigate
    const navigate = useNavigate();

    //useEffect Hook is similar componentDidMount
    useEffect(() => {

        //axios is a promised based web client
        //make a HTTP Request with GET method and pass as part of the
        //url.
        axios.get('http://localhost:4000/api/student/' + id)
            .then((response) => {

                // Assign Response data to the arrays using useState.
                setName(response.data.name);
                setSurname(response.data.surname);
                setAge(response.data.age);
                setNumber(response.data.number);
                setCourse(response.data.course);
                setYearOfStudy(response.data.yearofstudy);
            })
            .catch()
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        const editStudent = {
            name: name,
            surname: surname,
            age: age,
            number: number,
            course: course,
            yearofstudy: yearofstudy

        }

        axios.put('http://localhost:4000/api/student/' + id, editStudent)
            .then((res) => {
                console.log(res.data);
                navigate('/read');
            });
    }
    return (
        <div>
            <br></br>
            <h3>Edit Student Information</h3>
            <br></br>
            <center>
            <form onSubmit={handleSubmit}>
              <Card style={{ width: '18rem' }}>
                <div className="form-group">
                    <label>Edit Name </label>
                    <input type="text"
                        className="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <br></br>
                <div className="form-group">
                    <label>Edit Surname </label>
                    <input type="text"
                        className="form-control"
                        value={surname}
                        onChange={(e) => setSurname(e.target.value)}
                    />
                </div>
                <br></br>

                <div className="form-group">
                    <label>Edit Age </label>
                    <input type="number"
                        className="form-control"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                    />
                </div>
                <br></br>

                <div className="form-group">
                    <label>Edit Student Number </label>
                    <input type="number"
                        className="form-control"
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                    />
                </div>
                <br></br>

                <div className="form-group">
                    <label>Edit Course </label>
                    <input type="text"
                        className="form-control"
                        value={course}
                        onChange={(e) => setCourse(e.target.value)}
                    />
                </div>
                <br></br>

                <div className="form-group">
                    <label>Edit Year of Study </label>
                    <input type="number"
                        className="form-control"
                        value={yearofstudy}
                        onChange={(e) => setYearOfStudy(e.target.value)}
                    />
                </div>
                </Card>
                <br></br>
                <div className="form-group">
                    <input type="submit" value="Submit Changes" className="btn btn-success" />
                </div>
            </form>
            </center>
        </div>
    );
}