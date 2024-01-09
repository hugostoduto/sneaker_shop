import React from 'react'

const Button = ({ label, iconUrl }) => {
  return (
    <button className='flex items-center justify-center gap-2 px-7 py-4 boder font-montserrat text-lg leading-none bg-coral-red rounded-full text-white boder-colral-red'>
      {label}
      <img className='ml-2 rounded-full w-5 h-5' src={iconUrl} alt={iconUrl} />
    </button>
  )
}

export default Button