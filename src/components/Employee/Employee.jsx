import React from "react";
import "./Employee.scss";

const Employee = (props) => {

    const { details } = props;

    const nameAndRole = details.map((employee) => {
        return (<>
            <div>
                <p>Employee: {employee.name}</p>
                <p>Role: {employee.role}</p>
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
    return <div className="employeeCard">{nameAndRole}</div>
}

export default Employee;