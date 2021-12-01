import "./App.scss";
import Employee from "./components/Employee/Employee";
import Header from "./components/Header/Header";
import team from "./data/team";

const App = () => {

  // const employeeName = team.map((employee) => {
  //   return <p>{employee.name}</p>
  // })
  // console.log(employeeName);

  // const employeeRole = team.map((employee) => {
  //   return <p>{employee.role}</p>
  // })

  // const nameAndRole = team.map((employee) => {
  //   return (<>
  //     <p>Employee:{employee.name}</p>
  //     <p>Role:{employee.role}</p>
  //   </>
  //   )
  // })

  return (<>
    <div className="app">
      <div>
        <Header />
      </div>
      <section className="employeeCard-container">
        <Employee />
      </section>
    </div>
  </>
  );
};

export default App;
