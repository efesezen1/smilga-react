import { serviceData } from '../data'
import Title from './Title'

const Services = () => {
   return (
      <section className="section services" id="services">
         <Title title='our services'/>

         <div className="section-center services-center">
            {serviceData.map((serviceInfo) => {
               const { icon, title, text } = serviceInfo
               return (
                  <article className="service">
                     <span className="service-icon">
                        <i className={icon}></i>
                     </span>
                     <div className="service-info">
                        <h4 className="service-title">{title}</h4>
                        <p className="service-text">{text}</p>
                     </div>
                  </article>
               )
            })}
         </div>
      </section>
   )
}

export default Services
