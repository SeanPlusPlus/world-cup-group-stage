import { useContext, useState } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { updateRanking } from '../utils/updateRanking'
import _includes from 'lodash/includes'

const Groups = () => {
  const [invalidGroups, setInvalidGroups] = useState([])

  const {
    entries,
    GROUPS,
    COUNTRIES,
    setCountries,
  } = useContext(GlobalContext)

  const handleClick = (group, country) => {
    const { rankings, invalid } = updateRanking(group, country, COUNTRIES, entries, invalidGroups)
    setInvalidGroups(invalid)
    setCountries(rankings)
  }

  if (!GROUPS) {
    return <></>
  }

  if (!COUNTRIES) {
    return <></>
  }

  return (
    <div className="mt-2 ml-1 border-r-2 md:grid md:grid-cols-2 md:gap-4">
      {GROUPS.map((g) => (
        <ul key={g} className="menu bg-base-100 mb-4 pb-2">
          <li className="menu-title pt-2">
            <div>
              <span>Group {g}</span>
              {_includes(invalidGroups, g) && (
                <span role="img" aria-label="invalid" className="ml-1">
                  ❌
                </span>
              )}
            </div>
          </li>
          {COUNTRIES[g].map((c) => (
            <li key={c.name} onClick={() => handleClick(g, c)}>
              <a className="py-1 text-sm">
                {c.rank === 'first' && (
                  <span role="img" aria-label="first" className="mr-1">
                    🥇
                  </span>
                )}
                {c.rank === 'second' && (
                  <span role="img" aria-label="second" className="mr-1">
                    🥈
                  </span>
                )}
                {!c.rank && (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                  </svg>
                )}
                <span className={!c.rank ? 'opacity-80' : 'font-bold opacity-100'}>
                  {c.name} {c.flag}
                </span>
              </a>
            </li>
          ))}
        </ul>
      ))}
    </div>
  )
}

export default Groups
