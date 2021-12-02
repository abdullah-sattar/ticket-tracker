import React from "react";
import "./Employee.scss";
import Counter from "../Counter/Counter";

const Employee = (props) => {

    const {name, role} = props.employee;

return (
    <div className = "employeeCard">
        <h2>{name}</h2>
        <h4>{role}</h4>
        <Counter />
    </div>
)
}

export default Employee;