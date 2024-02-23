// import './App.css';
import {Routes,Route, BrowserRouter} from 'react-router-dom'
import Home from './Home';
import Headerr from './components/Header/Headerr';
import { Global } from './GlobalStyle';
// import { useDispatch, useSelector } from 'react-redux';
// import Signup from './components/Register/log/REGISTER/Signup';
// import Authentication from './components/Register/Authentication';
// import { useEffect } from 'react';
// import { loginUser } from './Redux/UserSlice';
// import { auth } from './asset/firebase';

function App() {
  // const dispatch=useDispatch()

  // useEffect(()=>{
  //    auth.onAuthStateChanged((authuser)=>{
  //     if(authuser){
  //       dispatch(loginUser({
  //         uid:authuser.uid,
  //         username:authuser.displayName,
  //         email:authuser.email,

  //       }))
  //     }else {
  //       console.log('not logged in')
  //     }
  //    })

  // },[])


  // const select= useSelector(state=>state.data.user.user)
  // console.log(select)
  return (
    <>
    <div className="App">
      <Global/>
      <BrowserRouter>
          <Headerr/>
          <Routes>
            <Route path='/' element={<Home/>}/>
          </Routes>
          </BrowserRouter>
      {/* {
        select ? (
           <BrowserRouter>
          <Headerr/>
          <Routes>
            <Route path='/' element={<Home/>}/>
          </Routes>
          </BrowserRouter>
        ) : 
        (
         <Authentication/>
        )
      } */}
    
    </div>
    </>
  );
}

export default App;
