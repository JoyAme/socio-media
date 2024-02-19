import { BsPencilFill } from "react-icons/bs";
import { CentDown, CentWrap, Centt } from './Centerstyle'
import { AiOutlineLike } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa6";
import { RiSendPlaneFill } from "react-icons/ri";
import { BiRepost } from "react-icons/bi";
import { AiFillPicture } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { BiSolidVideos } from "react-icons/bi";
import { FaRegCalendarAlt } from "react-icons/fa";
import { TbArticle } from "react-icons/tb";
import Inputoptions from "../../asset/InputOpt/Inputoptions";
import {db} from '../../asset/firebase'
import { getDocs,collection,addDoc} from "firebase/firestore";
import { useEffect, useState } from "react";

const Cent = () => {
  const [post,setPost] =useState([])
  const [upload,setUpload] =useState('')

  const postCollection=collection(db,"Post")


  const getPost = async ()=>{
     
    try{
      const Data= await  getDocs(postCollection)
      const filterPost= Data.docs.map((doc)=>({...doc.data(), id:doc.id}))
      setPost(filterPost)
      console.log(filterPost)
    }catch (err){
      console.error(err)
    }     
  }

  useEffect(()=>{
    getPost()
  },[])

const HandleSubmit= async (e)=>{
    e.preventDefault()
  try{
    await addDoc(postCollection,{
      Writeup:upload,
    })
    getPost()
  }catch (err){
    console.error(err)
  }
}




  return (
    <>
   <Centt>
    <CentWrap>
    {/* <div className='center' > */}
      <div className='feed-container'>
        <div className="Search-Form">
          <BsPencilFill />
          <form onSubmit={HandleSubmit}>
            <input type="text" placeholder="Start a post" onChange={(e)=> setUpload(e.target.value)}/>
            <button type="submit">send</button>
          </form>
        </div>
        <div className="Input-options">
        <Inputoptions Icon={<AiFillPicture />} color='blue' title='Photo'/>
        <Inputoptions Icon={<BiSolidVideos />} color='yellow' title='Video'/>
        <Inputoptions Icon={<FaRegCalendarAlt />} color='red' title='Event'/>
        <Inputoptions Icon={<TbArticle />} color='green' title='Write article'/>
        </div>
      </div>
    {/* </div> */}
    </CentWrap>

<div>
<hr></hr>
<h6>sort by</h6>
</div>


 
  
  {
  post.map((posts)=>{
    return(
      <>
       <CentDown> 
     <div className="user-info">
          <FaUserCircle className='avatar'/> 
          <div>
            <h5>Name</h5>
            <h6>Work</h6>
          </div>
      </div>
      <div>
        <h4>{posts.Writeup}</h4>
      </div>

      <div className='comments-Input'>
        <Inputoptions Icon={<AiOutlineLike />} title='Liked' color='grey' className='comments'/>
        <Inputoptions Icon={<FaRegCommentDots />} title='Comment' color='grey' className='comments'/>
        <Inputoptions Icon={<BiRepost />} title='Repost' color='grey' className='comments'/>
        <Inputoptions Icon={<RiSendPlaneFill />} title='Send' color='grey' className='comments'/>
        </div>
        </CentDown> 
    </>   
)
})
}


    </Centt>
    </>
  )
}

export default Cent
