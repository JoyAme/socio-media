import React from 'react'
import { Sid, SideBar, Sidewrap } from './Sidestyle'
import { FaHashtag, FaUserCircle } from "react-icons/fa";
import { RiBuilding3Fill } from "react-icons/ri";
import { Data } from './Data';
// import { useSelector } from 'react-redux';


const Sidee = () => {
  // const User=useSelector((state)=> state.data.user.user)

  return (
    <>
    <Sid>
    <Sidewrap>
    <div>
      <div className='side-bar'>
        <img src='./image/backgig.jpeg' alt='back'/>
        <FaUserCircle className='avatar'/> 
        <h4>joy ame </h4>
        <h6 className='info1'>| Environmentalist | Project Management | interior designer | Product 
          management certified @entrylevel @aptlearn 
          | Digital (API) product management (in view)</h6>
          <hr></hr>
          <div className='Statdivs'>
              <div className='stats'>
                <div><h6>Profile viewers</h6></div>
                <div className='stat-numb' ><h6>62</h6></div>
              </div>
              <div className='stats stats1'>
                  <div><h6>connections </h6>
                  <span>Grow your network</span>
            </div>
            <div className='stat-numb'><h6>262</h6></div>
          </div>
          </div>
          <hr></hr>
          <div className='growth'>
            <h6>Grow professionally with premium</h6>
            <div className='triall'>
              <RiBuilding3Fill className='trial'/> 
              <h6>Try 1 month for 0 NGN</h6>
            </div>

          </div>
      </div>
     
    </div>
    </Sidewrap>

    <SideBar>
     <div className='side-barr'>
     <h5 className='Recent'>Recent</h5>
        {
          Data.map((data,index)=>{
            return(
              <div className='recent' key={index}>
                <h5>{data.Icon}</h5>
                <h5 className='title'>{data.title}</h5>
                </div>
            )
          })
        }
        <div className='group'>
          <h4>Group</h4>
          <div className='recent'>
                <h5><FaHashtag /></h5>
                <h5 className='title'>Architecture & Engineer</h5>
                </div>
        </div>
      </div>
      <hr></hr>
      <h4 className='discover'>Discover More</h4>
      </SideBar>


    </Sid>
      </>
  )
}

export default Sidee
