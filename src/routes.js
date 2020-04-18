import Cerro from "./layouts/Projects/Cerro.js"
import Contact from "./layouts/Contact.js"
import Credits from "./layouts/Credits.js"
import Gallery from "./layouts/Gallery.js"
import Home from "./layouts/Home.js"
import Junin from "./layouts/Projects/Junin.js"
import Mission from "./layouts/Mission.js"
import NotFound from "./components/Misc/NotFound.js"
import Oroya from "./layouts/Projects/Oroya.js"
import Projects from "./layouts/Projects.js"
import React from "react"
import Technology from "./layouts/Technology.js"
import Yurajhuanca from "./layouts/Projects/Yurajhuanca.js"
import { theme } from "src/theme"

// Projects

const getSomeData = () => null

export const routes = [
  {
    exact: true,
    path: "/",
    component: (props) => <Home theme={theme} {...props} />,
    loadData: () => getSomeData(),
  },
  {
    path: "/Home",
    component: (props) => <Home theme={theme} {...props} />,
    loadData: () => getSomeData(),
  },
  {
    path: "/Our Mission",
    component: (props) => <Mission theme={theme} {...props} />,
    loadData: () => getSomeData(),
  },
  {
    path: "/Contact",
    component: (props) => <Contact theme={theme} {...props} />,
    loadData: () => getSomeData(),
  },
  {
    path: "/Credits",
    component: (props) => <Credits theme={theme} {...props} />,
    loadData: () => getSomeData(),
  },
  {
    path: "/Gallery",
    component: (props) => <Gallery theme={theme} {...props} />,
    loadData: () => getSomeData(),
  },
  {
    // path: '/Projects ▾', => implement this and remove bottom if used
    path: "/Projects",
    component: (props) => <Projects theme={theme} {...props} />,
    loadData: () => getSomeData(),
  },
  {
    path: "/Yurajhuanca",
    component: (props) => <Yurajhuanca theme={theme} {...props} />,
    loadData: () => getSomeData(),
  },
  {
    path: "/Cerro",
    component: (props) => <Cerro theme={theme} {...props} />,
    loadData: () => getSomeData(),
  },
  {
    path: "/Junin",
    component: (props) => <Junin theme={theme} {...props} />,
    loadData: () => getSomeData(),
  },
  {
    path: "/Oroya",
    component: (props) => <Oroya theme={theme} {...props} />,
    loadData: () => getSomeData(),
  },
  {
    path: "/Technology",
    component: (props) => <Technology theme={theme} {...props} />,
    loadData: () => getSomeData(),
  },
  {
    component: (props) => <NotFound theme={theme} {...props} />,
    loadData: () => getSomeData(),
  },
]
