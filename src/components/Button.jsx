import React from 'react'

const Button = ({label,iconUrl,
  backgroundColor,textColor,borderColor
  ,fullWidth}) => {
  // console.log(borderColor)
  return (
    <button className={`flex justify-center ${fullWidth && 'w-full'} items-center rounded-full
    gap-2 px-7 py-4 border font-montserrat text-lg 
    leading-none
    ${backgroundColor ? `${backgroundColor} ${borderColor} ${textColor}` : 'bg-coral-red text-white border-coral-red'}`}>
     {label}
  {iconUrl && <img src={iconUrl} alt={label} className='ml-2 w-5 h-5 rounded-full'/>}
    </button>
  )
}

export default Button