import Home from "./layouts/Home.js"
import About from "./layouts/About.js"
import Contact from "./layouts/Contact.js"
import Credits from "./layouts/Credits.js"
import Gallery from "./layouts/Gallery.js"
import Projects from "./layouts/Projects.js"
import Technology from "./layouts/Technology.js"
import NotFound from "./components/Misc/NotFound.js"
// import Login from './layouts/Login.js'

// Projects
import Yurajhuanca from "./layouts/Projects/Yurajhuanca.js"
import Cerro from "./layouts/Projects/Cerro.js"
import Junin from "./layouts/Projects/Junin.js"
import Oroya from "./layouts/Projects/Oroya.js"

const getSomeData = () => null

export const routes = [
  {
    exact: true,
    path: "/",
    component: Home,
    loadData: () => getSomeData()
  },
  {
    path: "/Home",
    component: Home,
    loadData: () => getSomeData()
  },
  {
    path: "/About",
    component: About,
    loadData: () => getSomeData()
  },
  {
    path: "/Contact",
    component: Contact,
    loadData: () => getSomeData()
  },
  {
    path: "/Credits",
    component: Credits,
    loadData: () => getSomeData()
  },
  {
    path: "/Gallery",
    component: Gallery,
    loadData: () => getSomeData()
  },
  {
    // path: '/Projects ▾', => implement this and remove bottom if used
    path: "/Projects",
    component: Projects,
    loadData: () => getSomeData()
  },
  {
    path: "/Yurajhuanca",
    component: Yurajhuanca,
    loadData: () => getSomeData()
  },
  {
    path: "/Cerro",
    component: Cerro,
    loadData: () => getSomeData()
  },
  {
    path: "/Junin",
    component: Junin,
    loadData: () => getSomeData()
  },
  {
    path: "/Oroya",
    component: Oroya,
    loadData: () => getSomeData()
  },
  {
    path: "/Technology",
    component: Technology,
    loadData: () => getSomeData()
  },
  {
    component: NotFound,
    loadData: () => getSomeData()
  }
]
