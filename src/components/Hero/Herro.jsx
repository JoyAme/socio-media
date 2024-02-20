import React from 'react'
import { Container } from '../../GlobalStyle'
import Rightbar from '../../Feeds/Right/Rightbar';
import Sidee from '../../Feeds/Side/Sidee';
import Cent from '../../Feeds/Center/Cent';
import { Hewrap } from './HeroSty';


const Herro = () => {
  return (
    <div>
   <Hewrap>
    <Container>
    <div className='wrap-body'>
      <Sidee/>
      <Cent className='cent'/>
      <Rightbar/>
      </div>
      </Container>
    </Hewrap>
    </div>
  )
}

export default Herro
