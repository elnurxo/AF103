import {
  AppBar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Stack,
  Box,
  Toolbar,
  Typography,
  Container,
  TextField,
  CircularProgress,
  Pagination,
} from "@mui/material";
import MovieIcon from "@mui/icons-material/Movie";
import { useState } from "react";
// import useFetch from "../hooks/useFetch";

export default function Movies() {
  let [search, setSearch] = useState("");
  let [movies, setMovies] = useState([]);
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState(null);
  let[pages,setPages] = useState(0);

  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <MovieIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            Movies layout
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Album layout
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              Something short and leading about the collection below—its
              contents, the creator, etc. Make it short and sweet, but not too
              short so folks don&apos;t simply skip over it entirely.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <TextField
                id="outlined-basic"
                label="Search for movie"
                variant="outlined"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
              <Button
                onClick={() => {
                  setLoading(true);
                  fetch(`https://www.omdbapi.com/?s=${search}&apikey=f4bfe88b`)
                    .then((res) => {
                      if (!res.ok) {
                        throw new Error("failed!");
                      }
                      return res.json();
                    })
                    .then((data) => {
                      setMovies(data);
                      setPages(Math.ceil((Number(data.totalResults)/10)));
                    })
                    .catch((err) => setError(err))
                    .finally(() => setLoading(false));
                  setSearch("");
                }}
                variant="outlined"
              >
                Search
              </Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {loading ? (
              <CircularProgress sx={{ margin: "0 auto", display: "block" }} />
            ) : movies.Response == "False" ? (
              <h1
                style={{ textAlign: "center", margin: "0 auto", color: "red" }}
              >
                Not Any Data for your search!
              </h1>
            ) : (
              movies.Search &&
              movies.Search.map((movie) => (
                <Grid item key={movie.imdbID} xs={12} sm={6} md={4}>
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <CardMedia
                      component="div"
                      sx={{
                        pt: "56.25%",
                      }}
                      image={movie.Poster}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {movie.Title}
                      </Typography>
                      <Typography>Year: {movie.Year}</Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">useless button</Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))
            )}
          </Grid>

          {movies.Search?.length > 0 && (
            <div style={{ display: "flex", justifyContent: "center", marginTop:'40px' }}>
              <Pagination count={pages} variant="outlined" shape="rounded" />
            </div>
          )}
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
      </Box>
      {/* End footer */}
    </>
  );
}
