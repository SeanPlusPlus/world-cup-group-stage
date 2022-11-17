// components
import Header from '../components/header'
import Nav from '../components/nav'
import Home from '../components/home'

export default function App() {
  return (
    <div className="grid-bg md:h-screen">
      <Header />
      <Nav />
      <Home />
    </div>
  )
}