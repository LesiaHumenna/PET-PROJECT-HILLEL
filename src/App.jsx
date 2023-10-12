import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Shop from "./pages/Shop";
import HeaderUser from "./pages/HeaderUser";
import BookTable from "./pages/BookTable";
import Search from "./pages/Search";
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/menu",
        element: <Menu />
      },
      {
        path: "/shop",
        element: <Shop />
      },
      {
        path: "/booktable",
        element: <BookTable />
      },
      {
        path: "/login",
        element: <HeaderUser />
      },
      {
        path: "/search",
        element: <Search />
      }
    ]
  }
])

function App(){
  return (
    <RouterProvider router={router} />
  )
}
export default App;