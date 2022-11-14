import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const Home = () => {

  const {
    hello,
    world,
  } = useContext(GlobalContext)

  return (
    <div className="flex mb-4">
      <div className="w-1/2 h-12">{hello}</div>
      <div className="w-1/2 h-12">{world}</div>
    </div>
  )
}

export default Home
