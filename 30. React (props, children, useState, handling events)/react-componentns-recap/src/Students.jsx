import { Fragment } from "react";
import employees from "./data.js";

const Students = () => {
  const totalSalary = employees.reduce((prevValue, currentValue) => {
    return prevValue+currentValue.salary
  }, 0);
  
  return (
    <Fragment>
      <h3>Students</h3>
      <ul>
        {employees &&
          employees
            .sort((emp1, emp2) => emp1.name.localeCompare(emp2.name))
            .map((employee, idx) => {
              return (
                <li key={idx}>
                  {employee.name}, {employee.salary}
                </li>
              );
            })}
      </ul>
      <span>Avg Salary: {(totalSalary/employees.length).toFixed(2)}</span>
    </Fragment>
  );
};

export default Students;
