import { FiPlus } from "react-icons/fi";
import { BsFillInfoSquareFill } from "react-icons/bs";
import { FaCircleUser } from "react-icons/fa6";
import { RightDown, RightWrap } from './Rightstyl'
import { Data } from "./Data";
import { Sid } from "../Side/Sidestyle";

const Rightbar = () => {
  return (
    <>
    <Sid>
    <RightWrap>
    <div>
    <div className='top'>
      <h3>Add to your feed</h3>
      <h5><BsFillInfoSquareFill /></h5>
    </div>

    <div className="information">
    

    {
      Data.map((data,index)=>{
        return(
          <div className="info" key={index}>
            <FaCircleUser className="user" />
          <div className="info1">
          <h4>{data.name}</h4>
          <h5>{data.ocupation}</h5>
          <button className='btn'><FiPlus /> Follow</button>
          </div>
          </div>
        )

      })
    
    }
     </div>
   <h5>View recoomendations</h5>
    </div>

    </RightWrap>

    <RightDown>
      <div>
        <h6>Ad</h6>
      </div>
      <div>
        <h6>joy,hard to find a role?</h6>
        <div>
        <FaCircleUser className="user" />
        </div>
        <h5>Find more companies</h5>
        <button className="btn">Start a free Trial</button>
      </div>
    </RightDown>
    </Sid>
    </>
  )
}

export default Rightbar
