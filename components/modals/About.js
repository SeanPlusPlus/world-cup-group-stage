import { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'
import Image from 'next/image'

const About = () => {
  const title = 'World Cup Group Stage Fantasy'
 
  const {
    modal,
    setModal,
  } = useContext(GlobalContext)

  const handleClose= () => {
    setModal({})
  }

  return (
    <div className={`modal ${modal && modal.about}`}>
      <div className="modal-box relative">
        <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-4 top-4" onClick={handleClose}>✕</label>
        <h3 className="font-bold text-xl flex">
          <span className="ml-1 text-2xl pb-4">
            {title}
          </span>
        </h3>
        <div>
          <p className="pb-4">The game is simple:  pick the #1 and #2 seed from each group. Brackets will be scored after the Group Stage is over. For each group, 7 points if you correctly pick the #1 seed, 3 points if you correctly pick the #2 seed.</p>
          <p className="pb-4">
            Fill out <a className="link text-sky-500" href="https://forms.gle/nkZy6r5oWwTpCL2C8" target="_blank" rel="noopener noreferrer">this form</a> to play.
          </p>
          <p className="pb-4">
            And this little dashboard web app right here is a handy way for us to see how our brackets are doing. Click on a name to see a "perfect" score (all of their picks match), or click on a team and you can toggle first / second on and off.
          </p>
          <Image
            src="/groups.png"
            width={350}
            height={350}
          />
          <p className="pt-3">
            By <a className="link text-sky-500" href="https://seanplusplus.com" rel="noopener noreferrer" target="_blank">SeanPlusPlus</a>
          </p>
        </div>
        <div className="modal-action pt-5">
          <label htmlFor="my-modal" className="btn" onClick={handleClose}>Close</label>
        </div>
      </div>
    </div>
  )
}

export default About