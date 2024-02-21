import { Container } from "../../GlobalStyle";
import { FaSearch } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { FaSuitcase } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { FaHospitalUser } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { AiFillMessage } from "react-icons/ai";
import Icons from "../../asset/Icon/Icons";
import { Headwrap } from "./Head";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../Redux/UserSlice";
import { signOut } from "firebase/auth";
import { auth } from "../../asset/firebase";




const Headerr = () => {
  const dispatch=useDispatch()
  const HandleSub=()=>{
       dispatch(logoutUser())
       signOut(auth)
  }
  
  return (
    <>
 <Headwrap>
    <Container>
    <div className="Header-row">
      <div className="linked">
        <img src='./image/linkedin.png' alt='linked-in' className="linkedin"/>
        <div className="search-row">
          <FaSearch  className="search-icon"/>
          <input type="text" placeholder="Search"/>
      </div>
      <div className="usericon">
      <Icons Icon={<FaUserCircle />} title='Me' />
      </div>
      </div>
      

      <div className="icons">
      <Icons Icon={<IoHome />} title='Home'/>
      <Icons Icon={<FaHospitalUser />} title='My Network'/>
      <Icons Icon={<FaSuitcase />} title='jobs'/>
      <Icons Icon={<AiFillMessage />} title='Messaging'/>
      <Icons Icon={<IoMdNotifications />} title='Notifications'/>
      <div>
      <Icons Icon={<FaUserCircle />} title='Me'/>
     
      </div>
      </div>
      <div className="icons-right">
      <Icons Icon={<IoHome />} title='Home'/>
      <Icons Icon={<FaHospitalUser />} title='My Network'/>
    
      </div>
      <button className="btn" onClick={HandleSub}>Logout</button>

    </div>
    </Container>
    </Headwrap>
    </>
  )
}

export default Headerr

