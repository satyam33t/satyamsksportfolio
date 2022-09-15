import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'





const data = [
  {
    avatar: AVTR1,
    name:'Tina snow',
    review:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "

  },
  {
    avatar: AVTR2,
    name:'Shatta wale',
    review:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."

  },
  {
    avatar: AVTR3,
    name:'Kware despite',
    review:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "

  },
  {
    avatar: AVTR4,
    name:'Nana ama',
    review:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "

  }
]
const testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>


      <div className='container testimonials__container'>
        {
          data.map(({avatar,name,review},index) =>{
            return (
              <article key={index} className='testimonial'>
                <div className="client__avatar">
                  <img src={avatar}  />
                </div>
          
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review} </small>
              </article>
            )
          })
        }
        
      </div>

    </section>
  )
}

export default testimonials;
