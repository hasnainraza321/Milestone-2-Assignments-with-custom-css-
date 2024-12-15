import Link from 'next/link';
import React from 'react'

const Watches = () => {
  const watchData = [
    { 
        id: 1, 
        name: 'Rolex', 
        price: 12000, 
        description: 'Luxury watch', 
        image: '/Images/Rolex1.png' 
    },
    { 
        id: 2, 
        name: 'Omega', 
        price: 8000, 
        description: 'Sporty design with precision', 
        image: '/Images/Omega2.png' 
    },
    { 
        id: 3,  
        name: 'TAG Heuer', 
        price: 5000, 
        description: 'Sporty and stylish timepiece', 
        image: '/Images/TAG Heuer3.png' 
    },
    { 
        id: 4, 
        name: 'Patek Philippe', 
        price: 25000, 
        description: 'Elegant and timeless timepiece', 
        image: '/Images/Patek Philippe4.png' 
    },
    { 
        id: 5, 
        name: 'Cartier', 
        price: 7000, 
        description: 'Bold, luxurious, and rugged design', 
        image: '/Images/Cartier5.png' 
    },
    { 
        id: 6, 
        name: 'Audemars Piguet', 
        price: 18000, 
        description: 'High-end craftsmanship with iconic design', 
        image: '/Images/Audemars Piguet6.png' 
    }
];

  return (
    <div>
      <div className='watches-heading , fade-in'> Luxury Collection</div>
      <div className='watches , fade-in'>
        {watchData.map((watch) => (
        <div key={watch.id} className='watch-card'>
        <img src={watch.image} alt={watch.name}/>
        <h3>{watch.name}</h3>
        <p>{watch.description}</p>
        <div className='price'>${watch.price}</div>
        <Link href={"/contact"}><button>Add to cart</button></Link>
        </div>
        ))}
      </div>
    </div>
  )
}

export default Watches
