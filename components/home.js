import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const Home = () => {

  const {
    hello,
  } = useContext(GlobalContext)

  return (
    <>
      <div className="hero">
        <div className="hero-content text-center mt-0 ml-0 mr-0 pr-0 pl-0 pt-2">
          <div className="max-w-md">
            <div className="mb-3">
              {hello}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
