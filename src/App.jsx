import "./App.scss";
import Employee from "./components/Employee/Employee";
import Header from "./components/Header/Header";
import team from "./data/team";

const App = () => {

  const employeeDetails = team.map((employee) => {
    const container = {}

    container.name = employee.name;
    container.role = employee.role;
    
    return container;
    
  });

  console.log(employeeDetails);

  // const employeeRole = team.map((employee) => {
  //   return employee.role
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
        <Employee details={employeeDetails} />
      </section>
    </div>
  </>
  );
};

export default App;
