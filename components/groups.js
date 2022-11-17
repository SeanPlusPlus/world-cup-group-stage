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
    setEntries,
  } = useContext(GlobalContext)

  const handleClick = (group, country) => {
    const { rankings, invalid, updatedEntries } = updateRanking(group, country, COUNTRIES, entries, invalidGroups)
    setInvalidGroups(invalid)
    setCountries(rankings)
    setEntries(updatedEntries)
  }

  if (!GROUPS) {
    return <></>
  }

  if (!COUNTRIES) {
    return <></>
  }

  return (
    <div className="ml-2 md:ml-4 pr-2">
      <div className="mt-3 md:grid md:grid-cols-2 md:gap-4">
        {GROUPS.map((g) => (
          <ul key={g} className="menu bg-base-100 mb-4 pb-2">
            <li className="menu-title pt-2">
              <div>
                {_includes(invalidGroups, g) && (
                  <span role="img" aria-label="invalid" className="mr-1">
                    ❌
                  </span>
                )}
                <span>Group {g}</span>
              </div>
            </li>
            {COUNTRIES[g].map((c) => (
              <li key={c.name} onClick={() => handleClick(g, c)}>
                <a className="py-1 text-sm">
                  {c.rank === 'first' && (
                    <span role="img" aria-label="first">
                      🥇
                    </span>
                  )}
                  {c.rank === 'second' && (
                    <span role="img" aria-label="second">
                      🥈
                    </span>
                  )}
                  {!c.rank && (
                    <input type="radio" checked="" className="radio-xs hover:cursor-pointer" onChange={() => {}}/>
                  )}
                  <span className={!c.rank ? 'opacity-90' : 'font-bold opacity-100'}>
                    {c.name} {c.flag}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  )
}

export default Groups
