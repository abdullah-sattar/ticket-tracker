import React from "react";
import "./Employee.scss";
import Counter from "../Counter/Counter";

const Employee = (props) => {

    const { details } = props;

    const nameAndRole = details.map((employee) => {
        return (<>
            <div className="employeeCard">
                <h2>{employee.name}</h2>
                <h4>{employee.role}</h4>
                <Counter />
            </div>
        </>
        )
    })

    // const names = name.map((empName) => {
    //     return <p>Employee:{empName}</p>
    //     const roles = role.map((empRole) => {
    //         return <p>Role:{empRole}</p>
    //     })
    //     return roles
    // })



    // return <div className="employeeCard">{nameAndRole}</div>
    return <>
        {/* <div className="employeeCard">
           
        </div>  */}
        {nameAndRole}
    </>
}

export default Employee;