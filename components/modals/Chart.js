import { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'
import { PieChart } from 'react-minimal-pie-chart'

const Chart = () => {
  const title = 'Responses'
 
  const {
    modal,
    setModal,
    COUNTRIES,
  } = useContext(GlobalContext)

  if (!COUNTRIES) {
    return <></>
  }

  const handleClose= () => {
    setModal({})
  }

  const COLORS = [
    '#3366CC',
    '#DC3912',
    '#FF9900',
    '#109618'
  ]

  return (
    <div className={`modal ${modal && modal.chart}`}>
      <div className="modal-box relative">
        <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-4 top-4" onClick={handleClose}>✕</label>
        <h3 className="font-bold text-xl flex">
          <span className="ml-1 text-2xl pb-4">
            {title}
          </span>
        </h3>
        <div>
          <div className="text-xl">
            <span className="mr-1">
              Group A 
            </span>
            <span role="img" aria-label="first">
              🥇
            </span>
          </div>

          <div>==========</div>

          <ul>
            { COUNTRIES['A'].map((c) => (
              <li key={c.name} className="text-sm list-disc ml-5">{c.name} {c.flag}</li>
            ))}
          </ul>
          <PieChart
            data={
              COUNTRIES['A'].map((c, i) => ({
                title: c.flag,
                value: i+1,
                color: COLORS[i]
              }))
            }
            label={({ dataEntry }) => dataEntry.title}
          />
        </div>
        <div className="modal-action pt-5">
          <label htmlFor="my-modal" className="btn" onClick={handleClose}>Close</label>
        </div>
      </div>
    </div>
  )
}

export default Chart