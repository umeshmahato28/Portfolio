import React from 'react'

const Contact = () => {
  return (
    <div className='bg-slate-600 flex p-2 m-3 z-0  item-center'>
      <input type="name" placeholder='Name' />
      <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-2 w-full bg-gray-700/50 rounded-lg"
        />
    </div>
  )
}

export default Contact