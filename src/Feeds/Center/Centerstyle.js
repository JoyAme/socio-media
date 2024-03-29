import {styled} from 'styled-components'

export const CentWrap=styled.div`
    

    flex:0.7;
    /* background:white; */
    margin:0 20px;
    /* height:20vh; */
.feed-container{
   background-color:white;
   border-radius:10px;
    padding:10px;
    padding-bottom:20px;
    margin-bottom:20px;
}
.Search-Form{
    display:flex;
    align-items:center;
    border-radius:30px;
    border:1px solid lightgray;
    padding:10px;
    color:grey;
    padding-left:15px;
 
 
}
.form{
    width:100%;
    display:flex;
    
    /* gap:40px; */
}
input{
    border:none;
    flex:1;
    margin-left:10px;
 outline:0;
    
}
button{
    /* display:none; */
    color:white;
    background:#659CF0;
    border:none;
    cursor: pointer;
    padding:3px 5px;
    border-radius:5px;

}
.Input-options{
    display:flex;
    justify-content:space-around;
  
}
@media screen and (max-width:768px){
    .Input-options{
    
    font-size:10px;
}
}
`

export const CentDown=styled.div`
 flex:0.5;
  background-color:white;
   border-radius:10px;
    padding:10px;
    padding-bottom:20px;
    text-align:left;
    margin-bottom:20px;  
    
.avatar{
    font-size:48px;
}
.user-info{
    display:flex;
    align-items:start;
    gap:10px;
    /* margin-left:20px; */
}
.post{
margin-top:20px;
margin-bottom:20px;
}
 h4{
    margin-top:20px;
}
.comments-Input{
    display:flex;
   cursor: pointer;
    justify-content:space-around; 
}
.comments{
    font-size:12px;
}

@media screen and (max-width:478px){
    .post h5{
        font-size:12px;
    }
}
@media screen and (max-width:768px){
    .post h5{
        font-size:12px;
    }
    .comments-Input{
    font-size:12px;
}
}
`
export const Centt=styled.div`
 flex:0.5;
  font-family: "Roboto", sans-serif;
  font-weight: 100;
  font-style: normal;

  hr{
   color:grey;
   height:2px;
}


@media screen and (max-width:478px){
    padding-top:40px;
}
`