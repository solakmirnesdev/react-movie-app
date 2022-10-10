import { useRoutes } from 'react-router-dom'
import NavBarComponent from './components/NavBarComponent'
import { routes } from './router/routes'

export default function App() {

  let element = useRoutes(routes)
  
  return ( 
    <>
      <NavBarComponent />
      {element}
    </>
  )
}