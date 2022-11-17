import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { setPerfect } from '../utils/setPerfect'

const Entries = () => {

  const {
    entries,
    COUNTRIES,
    // setEntries,
    // setCountries,
  } = useContext(GlobalContext)

  const handleClick = (e) => {
    setPerfect(e, COUNTRIES, entries)
  }

  if (!entries) {
    return <></>
  }

  return (
    <div className="mt-2 mr-3 ml-3">
      <div className="menu bg-base-100">
        <div className="menu-title pt-2">
          <span>
            Entries
          </span>
        </div>
      </div>
      <table className="table table-compact w-full border-0">
        <tbody>
          {entries.map((e) => (
            <tr key={e.name}>
              <td onClick={() => handleClick(e)} className="hover:cursor-pointer hover:text-sky-500">
                {e.name}
              </td>
              <td>
                <code>
                  {e.total}
                </code>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Entries
