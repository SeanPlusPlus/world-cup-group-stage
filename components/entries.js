import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const Entries = () => {

  const {
    entries
  } = useContext(GlobalContext)

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
              <td>
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
