import { data } from "./data.js";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Students = () => {
  let [students, setStudents] = useState([...data]);
  let [name, setName] = useState("");
  let [age, setAge] = useState(0);
  function handleSearch(e) {
    let filteredStudents = students.filter((student) =>
      student.name
        .toLowerCase()
        .trim()
        .includes(e.target.value.toLowerCase().trim())
    );
    if (e.target.value.trim() === "") {
      setStudents([...data]);
    } else {
      setStudents(filteredStudents);
    }
  }
  function handleSort() {
    let sortedStudents = students.sort((stu1, stu2) => stu1.age - stu2.age);
    setStudents([...sortedStudents]);
  }
  function handleSubmit(e) {
    e.preventDefault();
    let newStudent = { id: uuidv4(), name: name, age: age };
    setStudents([...students, newStudent]);
    data.push(newStudent);
    setName("");
    setAge(0);
  }
  function handleDelete(id) {
    let filterStudents = students.filter((student)=>student.id!==id);
    let idx = students.indexOf((x)=>x.id===id)
    data.splice(idx,1);
    setStudents([...filterStudents]);
  }

  return (
    <>
      <input onChange={(e) => handleSearch(e)} placeholder="search student" />
      <button onClick={handleSort}>sort by age</button>
      <ul>
        {students &&
          students.map((student, idx) => {
            return (
              <li key={idx}>
                {student.name}, {student.age} <button onClick={()=>handleDelete(student.id)}>delete</button>
              </li>
            );
          })}
      </ul>

      {/* add student */}
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
          placeholder="enter name"
          type="string"
        />
        <input
          onChange={(e) => {
            setAge(e.target.value);
          }}
          value={age}
          placeholder="enter age"
          type="number"
          min={0}
        />
        <button type="submit">add student</button>
      </form>
    </>
  );
};

export default Students;
