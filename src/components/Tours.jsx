import img1 from '../images/tour-1.jpeg'
import img2 from '../images/tour-2.jpeg'
import img3 from '../images/tour-3.jpeg'
import img4 from '../images/tour-4.jpeg'
import img5 from '../images/tour-5.jpeg'
import img6 from '../images/tour-6.jpeg'
import { tourData } from '../data'
import Title from './Title'

const Tours = () => {
   return (
      <section className="section" id="tours">
        <Title title='featured tours'/>
         <div className="section-center featured-center">
            {tourData.map((tour, i) => {
               const { date, title, text, country, days, price, img } = tour
               return (
                  <article className="tour-card">
                     <div className="tour-img-container">
                        <img src={img} className="tour-img" alt="" />
                        <p className="tour-date">{date}</p>
                     </div>
                     <div className="tour-info">
                        <div className="tour-title">
                           <h4>{title}</h4>
                        </div>
                        <p>{text}</p>
                        <div className="tour-footer">
                           <p>
                              <span>
                                 <i className="fas fa-map"></i>
                              </span>{' '}
                              {country}
                           </p>
                           <p>{days}</p>
                           <p>{price}</p>
                        </div>
                     </div>
                  </article>
               )
            })}
         </div>
      </section>
   )
}
export default Tours
