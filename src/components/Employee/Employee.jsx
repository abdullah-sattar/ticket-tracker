import React from "react";
import "./Employee.scss";
import team from "../../data/team";

const Employee = () => {

    // const { name, role } = props;

    const nameAndRole = team.map((employee) => {
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
    // }) 

    // const roles = role.map((empRole) => {
    //     return <p>Role:{empRole}</p>
    // }) 

    return <div className="employeeCard">{nameAndRole}</div>
}

export default Employee;