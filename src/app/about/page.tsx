import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div>
      <section className='about'>
        <div className='about-content'>
            <h2 className='fade-in'>About us</h2>
            <p>H-Time Luxe is a premium luxury watch brand known for its exceptional craftsmanship,timeless elegance, and innovative design. 
                Each timepiece is meticulously crafted to blend classic sophistication with modern aesthetics, offering a unique expression of style and precision.
                Our watches are more than just timekeepers—they are a symbol of success, individuality, and refined 
                taste. With a commitment to quality and attention to detail, H-Time Luxe stands out as a brand that 
                values both form and function.</p>
        </div>
         <div className="image-about , fade-in">
                  <Image 
                    src="/Images/watchesss.jpg" 
                    alt="watches" 
                    height={1000} 
                    width={1000} 
                  />
                </div>
      </section>
    </div>
  )
}

export default About
