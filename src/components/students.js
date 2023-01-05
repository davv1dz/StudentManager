import React from "react";
import { StudentItems } from "./studentItems";

export class Students extends React.Component{
    render(){
        // acquire the data pass from the parent.
        // map function to collect data.
        return this.props.students.map( 
            (student)=>{
            // pass each student to each one of the studentitem
            return <StudentItems student={student} key={student.id} Reload={this.props.Reload}></StudentItems>
            }
        );
     
    }
}