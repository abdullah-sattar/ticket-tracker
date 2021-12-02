import "./App.scss";
import Employee from "./components/Employee/Employee";
import Header from "./components/Header/Header";
import team from "./data/team";

const App = () => {


  const createEmployeeCards = () => 
    team.map((employee) => {
    return <Employee key = {employee.id} employee = {employee }/>
  })
  
  return (<>
    <div className="app">
      <div>
        <Header />
      </div>
      <section className="employeeCard-container">
        {createEmployeeCards()}
      </section>
    </div>
  </>
  );
};

export default App;
