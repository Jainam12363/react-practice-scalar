import React from 'react'

function Banner() {
  return (
    <div className='h-[20vh] md:h-[70vh] bg-cover bg-center flex items-end' style={{backgroundImage: "url('https://deadline.com/wp-content/uploads/2025/05/thunderbolts2.jpg?w=1024')"}}>
        <div className='text-white text-2xl text-center w-full bg-gray-900/60 p-4'>The Thunderbolts*</div>

    </div>
  )
}

export default Banner