// components
import Header from '../components/header'
import Nav from '../components/nav'
import Home from '../components/home'
import Help from '../components/help'

export default function App() {
  return (
    <div className="grid-bg md:h-screen">
      <Header />
      <Nav />
      <Home />
      <Help />
    </div>
  )
}