import React from 'react'

function TechUsed({children}) {
  return (
    <div className='w-full h-auto flex flex-row flex-wrap items-center justify-evenly mb-4'>
        {children}
    </div>
  )
}

export default TechUsed