import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { setPerfect } from '../utils/setPerfect'

const Entries = () => {

  const {
    entries,
    COUNTRIES,
    setEntries,
    setCountries,
    setToast,
  } = useContext(GlobalContext)

  const handleClick = (e) => {
    const { standings, updatedEntries } = setPerfect(e, COUNTRIES, entries)
    setCountries(standings)
    setEntries(updatedEntries)
    setToast(false)
  }

  if (!entries) {
    return <></>
  }

  return (
    <div className="pr-4 mt-3">
      <table className="table table-compact w-full border-0 ml-2">
        <thead>
          <tr>
            <th>Name</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((e) => (
            <tr key={e.name}>
              <td onClick={() => handleClick(e)} className="hover:cursor-pointer font-bold text-sky-500 flex hover:underline">
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
