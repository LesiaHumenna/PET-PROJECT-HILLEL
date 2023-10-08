import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Shop from "./pages/Shop";
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