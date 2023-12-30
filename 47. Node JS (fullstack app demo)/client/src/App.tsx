import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ROUTES } from "./routes";
import "./App.css";
import { ArtistContextProvider } from "./services/context/ArtistContext";
import { AuthContextProvider } from "./services/context/AuthContext";

const routes = createBrowserRouter(ROUTES);

function App() {
  return (
    <AuthContextProvider>
      <ArtistContextProvider>
        <RouterProvider router={routes} />
      </ArtistContextProvider>
    </AuthContextProvider>
  );
}

export default App;
