import React from "react";
import "./Home.css";

export class Home extends React.Component {
    render() {
        return (
        <div>
            <div className="banner-container">
                <div className="text-center">
                    <h1 className="home-header">Welcome to MyApp</h1>
                    <h4 className="home-subheader">Manage all your student details</h4>
                </div>
            </div>
        </div>
        );
    }
}