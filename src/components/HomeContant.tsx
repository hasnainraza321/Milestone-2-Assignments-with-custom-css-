import React from 'react'
import Image from 'next/image'

const HomeContant = () => {
  return (
    <div>
      <section className="hero">
        <div>
            <h1 className="fade-in">Welcome to H-Time Luxe</h1>
            <p>Experience the artistry of time with H-Time Luxe. Our luxury watches are crafted with precision, 
                blending timeless elegance with modern sophistication. Each timepiece is a testament to exceptional 
                craftsmanship, designed to make every moment unforgettable. Discover a collection that defines luxury, style, 
                and precision. Elevate your look—because time deserves to be worn beautifully.</p>
            <button> Shop Now </button>
        </div>

        <div className="image , fade-in">
          <Image 
            src="/Images/watchess.jpg" 
            alt="watches" 
            height={1000} 
            width={1000} 
          />
        </div>
      </section>
    </div>
  )
}

export default HomeContant;
