import { useContext, useEffect } from 'react'
import axios from 'axios'
import _orderBy from 'lodash/orderBy'
import { GlobalContext } from '../context/GlobalState'
import { getScores } from '../utils/getScores'

import Groups from './groups'
import Entries from './entries'

const Home = () => {

  const {
    setGroups,
    setCountries,
    setEntries,
    setResponses,
  } = useContext(GlobalContext)

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        '/api/2022',
      )

      setGroups(result.data.GROUPS)
      setCountries(result.data.COUNTRIES)
      setResponses(result.data.responses)

      const scored = _orderBy(getScores(result.data.entries, result.data.COUNTRIES), ['total'], ['desc'])
      setEntries(scored)
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
