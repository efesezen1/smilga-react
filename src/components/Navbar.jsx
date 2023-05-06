import logo from '../images/logo.svg'
import { pageLinks, socialLinks } from '../data'
// console.log(socialLinks)
const Nav = () => {
   return (
      <nav className="navbar">
         <div className="nav-center">
            <div className="nav-header">
               <img src={logo} className="nav-logo" alt="backroads" />
               <button type="button" className="nav-toggle" id="nav-toggle">
                  <i className="fas fa-bars"></i>
               </button>
            </div>
            <ul className="nav-links" id="nav-links">
               {pageLinks.map((link) => {
                  const { id, text } = link
                  return (
                     <li key={id}>
                        <a href={`#${text}`} className="nav-link">
                           {' '}
                           {text}{' '}
                        </a>
                     </li>
                  )
               })}
            </ul>

            <ul className="nav-icons">
               {socialLinks.map((social) => {
                  const {id,href,icon} = social
                  return (
                     <li key={id}>
                        <a href={href} className='nav-icon'>
                           <i className={icon}></i>
                        </a>
                     </li>
                  )
               })}
            </ul>
         </div>
      </nav>
   )
}

export default Nav
