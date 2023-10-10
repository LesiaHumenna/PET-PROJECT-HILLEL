import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root";
import Home from "./pages/Home";
import Menu from "./pages/Menu";

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