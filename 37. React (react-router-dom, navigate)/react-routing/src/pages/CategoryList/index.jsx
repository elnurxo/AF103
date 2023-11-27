import { useEffect, useState } from "react";
import { getAllCategories } from "../../services/api/requests/categoryRequests";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
const CategoryList = () => {
    let [categories, setCategories] = useState([]);
    let navigate = useNavigate();
  useEffect(() => {
    if (JSON.parse(localStorage.getItem('user'))) {
        getAllCategories().then((res) => {
            setCategories(res);
          });
    }
    else{
        navigate('/login');
    }
  }, [navigate]);
  return (
   <>
   <Button color="primary" variant="outlined">
    <Link to='/category/add'>Add Category</Link>
   </Button>
    <TableContainer sx={{ width: "70%", margin: "50px auto" }} component={Paper}>
    <Table aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>ID</TableCell>
          <TableCell align="left">Name</TableCell>
          <TableCell align="left">Description</TableCell>
          <TableCell align="left">Detail</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {categories &&
          categories.map((category, idx) => (
            <TableRow
              key={idx}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {category.id}
              </TableCell>
              <TableCell component="th" scope="row">
                {category.name}
              </TableCell>
              <TableCell align="left">{category.description}</TableCell>
              <TableCell align="left">
                <Button color="warning" variant="contained">
                  <Link to={`/category/${category.id}`}>Info</Link>
                </Button>
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  </TableContainer>
   </>
  )
}

export default CategoryList