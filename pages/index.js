import { useContext, useEffect } from 'react'
import { GlobalContext } from '../context/GlobalState'

// components
import Header from '../components/header'
import Nav from '../components/nav'
import Home from '../components/home'
import Help from '../components/help'

export default function App() {
  const {
    toast,
    setToast,
  } = useContext(GlobalContext)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (toast === null) {
        setToast(true)
      }
    }, 7000);
    return () => clearTimeout(timer)
  }, [toast, setToast])

  return (
    <div className="grid-bg md:h-screen">
      <Header />
      <Nav />
      <Home />
      <Help />
    </div>
  )
}