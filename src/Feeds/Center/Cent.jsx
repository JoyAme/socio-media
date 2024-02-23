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
import { addDoc, collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../asset/firebase";
// import {db} from '../../asset/firebase';
// import { getDocs,collection,addDoc} from "firebase/firestore";
// import { useEffect, useState } from "react";



const Cent = () => {
  // const user=useSelector((state)=> state.data.user.user)
  const [post,setPost] =useState([])
  const [writeUp,setWriteUp] =useState('')
  // const [loading,setLoading]= useState(true)


 

  const postCollection= collection(db,"Post");

const CreatePost = async ()=>{
  
    await addDoc(postCollection,{Writeup:writeUp})
 setWriteUp()
}

  
useEffect(()=>{
 
  const getUpdate= async ()=>{
    const data= await getDocs(postCollection);
    setPost(data.docs.map((doc)=>({...doc.data(), id:doc.id})))
  }
  getUpdate()
})
 
  
  // const getPost = async ()=>{
    
  //   try{
  //     const Data= await  getDocs(postCollection)
  //     const filterPost= Data.docs.map((doc)=>({...doc.data(), id:doc.id}))
  //     setPost(filterPost)
  //     console.log(Data)
  //   }catch (err){
  //     console.error(err)
  //   }  
  // }
//   const getPost = async ()=>{
//     // e.preventDefault()
//     try{
//       const Data= await  getDocs(postCollection)
//       setPost(Data.docs.map(doc=>({...doc.data(), id:doc.id})))
          
//   }catch (err){
//         console.error(err)
//       }  
      
// }

//    useEffect(()=>{
   
//   getPost()
//     },[])
   
  // }

  // useEffect(()=>{
  //   collection(db,"Post").onSnapshot((snapshot)=>
  //  setPost( snapshot.docs.map((doc)=>({
  //   id:doc.id,
  //   data:doc.data(),
  //  })))
  //  )
    
  // },[])

  // const sendPost=(e)=>{
  //   e.preventDefault()
  //   collection('posts').add({
  //     name:'adebisi',
  //     ocupation:'product manager',
  //     Writeup:upload
  //   })
  // }


// const HandleSubmit= async ()=>{

//     try{
//       await addDoc(postCollection,[
//        { name:'joy Ame',
//         occupation:'product manager',
//         Writeup:upload,}
//       ])
    
//     }catch (err){
//       console.error(err)
//     }
// }



// if(loading){
//   <div>Loading...</div>
//  }

  return (
    <>
   <Centt>
    <CentWrap>
    {/* <div className='center' > */}
      <div className='feed-container'>
        <div className="Search-Form">
          <BsPencilFill />
          <div className="form">
            <input type="text" placeholder="Start a post" value={writeUp} onChange={(e)=> setWriteUp (e.target.value)}/>
            <button onClick={CreatePost}>send</button>
          </div>
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
  post.map((posts,index)=>{ 

    return(
      <>
      
       <CentDown> 
     <div className="user-info" key={index} >
          <FaUserCircle className='avatar'/> 
          <div>
            <h5>joy</h5>
            <h6>product manager|<br></br> operations manager</h6>
          </div>
      </div>
      <div className="post">
        <h5>{posts.Writeup}</h5>
      </div>
      {/* <hr></hr> */}
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
