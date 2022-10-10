import HomeView from '../views/HomeView'
import AboutView from '../views/AboutView'

export let routes =[
  {
    path: '/',
    element: <HomeView />
  },
  {
    path: '/about',
    element: <AboutView />
  }
]