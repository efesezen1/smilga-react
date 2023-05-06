import { socialLinks, pageLinks } from '../data'

const Footer = () => {
   return (
      <footer className="section footer">
         <ul className="footer-links">
            {pageLinks.map(({ id, text }) => {
               return (
                  <li>
                     <a href={`#${text}`} className="footer-link">
                        {text}
                     </a>
                  </li>
               )
            })}
         </ul>
         <ul className="footer-icons">
            {socialLinks.map((link) => {
               const { id, href, icon } = link
               return (
                  <li>
                     <a href={link} target="_blank" className="footer-icon">
                        <i className={icon}></i>
                     </a>
                  </li>
               )
            })}
         </ul>
         <p className="copyright">
            copyright &copy; Backroads travel tours company
            <span id="date"></span> all rights reserved
         </p>
      </footer>
   )
}

export default Footer
