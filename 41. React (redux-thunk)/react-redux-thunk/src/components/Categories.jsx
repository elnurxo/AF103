import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  add_category,
  fetchByID,
  fetchData,
} from "../redux/slices/categorySlice";

const Categories = () => {
  const { categories, loading, category } = useSelector((state) => state.category);
  const dispatch = useDispatch();
  const [newCategory, setNewCategory] = useState({ name: "", description: "" });
  useEffect(() => {
    dispatch(fetchData("https://northwind.vercel.app/api/categories"));
  }, [dispatch]);
  return (
    <>
      <div>Categories</div>
      <hr/>
      <h3>detail</h3>
      <div>name: {category?.name}</div>
      <div>description: {category?.description}</div>
      <hr/>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          newCategory.id = Date.now();
          dispatch(add_category(newCategory));
          setNewCategory({ name: "", description: "" });
        }}
      >
        <input
          onChange={(e) =>
            setNewCategory({ ...newCategory, name: e.target.value })
          }
          value={newCategory.name}
          type="text"
          placeholder="enter name"
        />
        <input
          onChange={(e) =>
            setNewCategory({ ...newCategory, description: e.target.value })
          }
          value={newCategory.description}
          type="text"
          placeholder="enter description"
        />
        <button type="submit">add</button>
      </form>
      {loading && <div>loading...</div>}
      <ul>
        {categories &&
          categories.map((category, idx) => {
            return (
              <li key={idx}>
                {category.name}, {category.description}
                <button
                  onClick={() => {
                    dispatch(
                      fetchByID(
                        `https://northwind.vercel.app/api/categories/${category.id}`,
                      )
                    );
                  }}
                >
                  detail
                </button>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default Categories;
