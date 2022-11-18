import { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'
import { PieChart } from 'react-minimal-pie-chart'

const Chart = () => {
  const title = 'Responses'
 
  const {
    modal,
    setModal,
    responses,
    COUNTRIES
  } = useContext(GlobalContext)

  if (!COUNTRIES) {
    return <></>
  }

  const handleClose= () => {
    setModal({})
  }

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
          {responses.map((r) => (
            <div key={r.name} className="mb-5">
              <div className="text-xl">
                <span className="mr-1">
                  {r.title}
                </span>
                <span role="img" aria-label="first">
                  {r.icon}
                </span>
              </div>
              <div>==========</div>
              <ul>
                { r.teams.map((t, i) => (
                  <li key={t.name} className="text-sm list-disc ml-5 my-2">
                    <code
                      className="border p-1 rounded text-xs mr-1"
                      style={{ borderColor: t.color }}
                    >{t.total}</code> 
                    <span>
                      {t.name} {t.flag}
                    </span>
                  </li>
                ))}
              </ul>
              <PieChart
                data={
                  r.teams.filter((t) => (t.total > 0)).map((t, i) => ({
                    title: t.flag,
                    value: t.total,
                    color: t.color
                  }))
                }
                label={({ dataEntry }) => dataEntry.title}
              />
            </div>
          ))}
        </div>
        <div className="modal-action pt-5">
          <label htmlFor="my-modal" className="btn" onClick={handleClose}>Close</label>
        </div>
      </div>
    </div>
  )
}

export default Chart