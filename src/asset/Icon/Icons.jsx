import React from 'react'
import { Iconwrap } from './icony'

const Icons = ({Icon,title}) => {
  return (
    <div>
        <Iconwrap>
      <div className='icon-house'>
        <h2 className='icony'>{Icon}</h2>
        <h5 className='title'>{title}</h5>
      </div>
      </Iconwrap>
    </div>
  )
}

export default Icons
