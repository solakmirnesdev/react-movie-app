import NavBarComponent from '../components/NavBarComponent'

export default function DefaultLayout({ child }) {
  return (
    <>
      <NavBarComponent />
      <main>{child}</main>
    </>
  )
}