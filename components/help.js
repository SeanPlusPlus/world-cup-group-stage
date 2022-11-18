import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const Help = () => {
  const {
    toast
  } = useContext(GlobalContext)

  if (!toast) {
    return <></>
  }

  return (
    <div className="toast">
      <div className="alert alert-success">
        <div>
          <span>Try clicking on a name or a team</span>
        </div>
      </div>
    </div>
  )
}

export default Help
