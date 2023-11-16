import "./App.css";
import { useEffect, useState } from "react";
import {
  getAllCategories,
  deleteCategoryByID,
  postCategory,
  patchCategoryByID,
} from "./api/httprequests.js";

function App() {
  let [count, setCount] = useState(0);
  let [newCategory, setNewCategory] = useState({ name: "", description: "" });
  let [edit, setEdit] = useState(null);
  let [users, setUsers] = useState([]);

  useEffect(() => {
    getAllCategories().then((res) => {
      setUsers(res);
    });
  }, [setUsers]);
  return (
    <>
      <button
        onClick={() => {
          setCount(--count);
        }}
      >
        -
      </button>
      <span>{count}</span>
      <button
        onClick={() => {
          setCount(++count);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          console.log("test");
        }}
      >
        fetch users
      </button>
      <ul>
        {users &&
          users.map((user) => {
            return (
              <li key={user.id}>
                <span>{user.name}</span>
                <button
                  onClick={() => {
                    setEdit(user);
                  }}
                >
                  edit
                </button>
                <button
                  onClick={() => {
                    deleteCategoryByID(user.id);
                    let filteredUsers = [...users].filter(
                      (x) => x.id !== user.id
                    );
                    setUsers([...filteredUsers]);
                  }}
                >
                  delete
                </button>
              </li>
            );
          })}
      </ul>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          let newUser = await postCategory({
            name: newCategory.name,
            description: newCategory.description,
          });
          setUsers([...users, newUser]);
          setNewCategory({ name: "", description: "" });
        }}
      >
        <input
          value={newCategory.name}
          onChange={(e) => {
            setNewCategory({ ...newCategory, name: e.target.value });
          }}
          placeholder="category name"
        />
        <input
          value={newCategory.description}
          onChange={(e) => {
            setNewCategory({ ...newCategory, description: e.target.value });
          }}
          placeholder="category desc"
        />
        <button type="submit">add</button>
      </form>

      {/* edit form */}
      {edit ? (
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            patchCategoryByID(edit.id,edit);
            setEdit(null);
            let updatedUser = users.find((x)=>x.id===edit.id);
            updatedUser.name = edit.name;
            updatedUser.description = edit.description;
            setUsers(users);
          }}
        >
          <input
            value={edit.name}
            onChange={(e) => {
              console.log(e.target.value);
              setEdit({...edit,name:e.target.value});
            }}
            placeholder="category name"
          />
          <input
            value={edit.description}
            onChange={(e) => {
              setEdit({...edit,description:e.target.value});
            }}
            placeholder="category desc"
          />
          <button type="submit">edit</button>
          <button
            onClick={() => {
              setEdit(null);
            }}
            type="reset"
          >
            cancel
          </button>
        </form>
      ) : null}
    </>
  );
}

export default App;
