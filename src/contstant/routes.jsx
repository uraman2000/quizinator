import Home from "../pages/Home"
import Math from "../pages/Math"

export const path = {
  Home: "home",
  Math: "math",
  Left: "left",
  Right: "right",
}
export const routes = [
  {
    path: path.Home,
    title: "Home App",
    element: <Home />,
  },
  {
    path: path.Math,
    title: "Math App",
    element: <Math />,
  },
]
