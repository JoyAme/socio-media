import React from 'react'
import { Inputwrap } from './Inputstyle'


const Inputoptions = ({title,Icon,color}) => {
  return (
    <Inputwrap>
    <div className='options'>
    <h1 style={{color: color}}>{Icon}</h1>
      <h5>{title}</h5>
     
    </div>
    </Inputwrap>
  )
}

export default Inputoptions
