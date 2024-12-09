import React from 'react'

export default function Header(props) {
  const {title, subTitle, subTitle2} = props
  return (
    <div className='h-72 text-left px-24 bg-[#F6F5FF] flex flex-col items-start justify-center'>
      <h2 className='text-3xl font-josefin text-secondary'>
      {title}
      </h2>
      <div className='flex font-lato font-bold'>
      <h3 className='text-xl '>

      {subTitle}
      </h3>
      <h3 className='text-xl text-[#FB2E86]'>
      {subTitle2}
      </h3>
      </div>
    </div>
  )
}
