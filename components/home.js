import { useContext, useEffect } from 'react'
import axios from 'axios'
import { GlobalContext } from '../context/GlobalState'

import Groups from './groups'
import Entries from './entries'

const Home = () => {

  const {
    setGroups,
    setCountries,
    setEntries,
  } = useContext(GlobalContext)

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        '/api/2022',
      )

      setGroups(result.data.GROUPS)
      setCountries(result.data.COUNTRIES)
      setEntries(result.data.entries)
    }

    fetchData()
  }, []);

  return (
    <div className="flex">
      <div className="w-1/2">
        <Groups />
      </div>
      <div className="w-1/2">
        <Entries />
      </div>
    </div>
  )
}

export default Home
