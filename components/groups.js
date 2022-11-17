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
    <div className="mt-2 pl-4 border-r-2">
      {GROUPS.map((g) => (
        <ul key={g} className="menu bg-base-100 mb-4 pb-2">
          <li className="menu-title pt-2">
            <span>Group {g}</span>
          </li>
          {COUNTRIES[g].map((c) => (
            <li key={c.name}>
              <a className="py-1 block">
                <span role="img" aria-label="dot" className="mr-2 w-2">
                •
                </span>
                <span className="ml-0">
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
