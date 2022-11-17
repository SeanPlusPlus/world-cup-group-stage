import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { setPerfect } from '../utils/setPerfect'

const Entries = () => {

  const {
    entries,
    COUNTRIES,
    // setEntries,
    setCountries,
  } = useContext(GlobalContext)

  const handleClick = (e) => {
    const { standings } = setPerfect(e, COUNTRIES, entries)
    setCountries(standings)
  }

  if (!entries) {
    return <></>
  }

  return (
    <div className="pr-4 mt-3">
      <table className="table table-compact w-full border-0 ml-2">
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
