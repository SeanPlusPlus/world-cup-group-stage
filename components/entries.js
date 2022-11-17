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
    <div>
      {entries.map((e) => (
        <div>{e.name}</div>
      ))}
    </div>
  )
}

export default Entries
