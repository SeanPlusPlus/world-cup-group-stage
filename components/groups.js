import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const Groups = () => {

  const {
    GROUPS,
    COUNTRIES,
  } = useContext(GlobalContext)

  if (!GROUPS) {
    return <></>
  }

  if (!COUNTRIES) {
    return <></>
  }

  return (
    <div>
      {GROUPS.map((g) => (
        <div>
          <div>{g}</div>
          {COUNTRIES[g].map((c) => (
            <div>{c.name} {c.flag}</div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Groups
