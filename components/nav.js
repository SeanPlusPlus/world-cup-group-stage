import Link from 'next/link'
import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

// components
import About from './modals/About'

const Nav = () => {
  const titleShort = 'Group Stage'
  const {
    setModal,
  } = useContext(GlobalContext)
 
  const handleOpenAbout = () => {
    setModal({about: 'modal-open'})
  }

  return (
    <>
      <div className="navbar shadow-lg bg-neutral text-neutral-content">
        <div className="flex-1">
          <Link href="/" passHref>
            <button className="btn btn-outline normal-case text-xl ml-2 border-sky-50">
              <span className="text-slate-300">{titleShort}</span>
            </button>
          </Link>
        </div>
        <div className="flex-none gap-2">
          <button
            className="mr-1 btn btn-outline border-sky-50"
            onClick={handleOpenAbout}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-sky-50">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
            </svg>

          </button>
        </div>
      </div>

      <About />
    </>
  )
}

export default Nav 
