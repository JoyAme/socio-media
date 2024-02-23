import {styled} from 'styled-components'

export const Sidewrap=styled.div`
background:white;
 flex:0.3;
 border-radius:10px;
 text-align:center;
 height:fit-content;
/* padding-bottom:2px; */
 hr{
    color:grey;
 }
 img{
    width:100%;
    height:10vh;
    margin-bottom:-32px;
    object-fit:cover;
    border-top-right-radius:8px;
    border-top-left-radius:8px;
 }

.avatar{
    font-size:48px;
}

.side-bar {

 .info1{
     margin-top:20px;
    margin-bottom:20px;
    padding:0 10px;
    font-size:11px;
    }
  .Statdivs{
    margin-top:20px;
    margin-bottom:20px;
  }
  .stats{
    display:flex;
    justify-content:space-between;
    margin-top:5px;
    padding:0 10px;
   
    h6{
        font-size:12px;
    }
    span{
        font-size:12px;
    }
    .stat-numb{
        color:#659CF0;
    }
}
.stats1{
    text-align:left;
}
    .growth{
        font-size:18px;
        margin-top:20px;
        padding:0 10px;
       padding-bottom:20px;
       text-align:left;
    }
}
.triall{
    display:flex;
    align-items:center;
    /* font-size:14px; */
    gap:2px;
    .trial{
        font-size:14px;
        color:orange;
    }
    
}

.side-barr{
    padding-top:30px;

   
}

@media screen and (max-width:768px){
    .side-bar{
    font-size:10px;
   
    }
}
`

export const SideBar=styled.div`
background:white;
 flex:0.3;
 margin-top:20px;
 border-radius:10px;
 text-align:left;
 height:fit-content;
.Recent{
    color:grey;
}
.title{
    color:grey;
}
 .recent{
    display:flex;
    gap:10px;
   font-size:16px;

   h5{
    margin-top:10px;
   }
 }
 .side-barr{
    padding-left:10px;
    padding-top:10px;
  
   
 }

 .group{
    margin-top:20px;
    margin-bottom:20px;
    padding-bottom:20px;
    h4{
        color:#659CF0;
    }
 }
 .discover{
    margin-top:10px;
    text-align:center;
    padding-bottom:20px;
 }
`
export const Sid=styled.div`
/* background:white; */
 flex:0.3;
 font-family: "Roboto", sans-serif;
  font-weight: 100;
  font-style: normal;

 /* border-radius:10px;
 text-align:center;
 height:fit-content; */



 @media screen and (max-width:768px){
    font-size:10px;
    
    }
`
