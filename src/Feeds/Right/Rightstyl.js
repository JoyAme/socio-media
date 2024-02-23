import {styled} from 'styled-components'

export const RightWrap=styled.div`
background:white;
padding:20px 10px;
 flex:0.3;
 border-radius:10px;
 text-align:center;
 height:fit-content;
.user{
    font-size:28px;
}
.top{
    display:flex;
    justify-content:space-between;
    align-items:center;
}
.information{
    display:grid;
    gap:10px;
}
.info{
    display:flex;
    align-items:start;
    margin-top:10px;
    gap:10px;
    .info1{
        text-align:left;
    }
}
.btn{
    padding:5px 15px;
    border-radius:19px;
    border:1px solid grey;
    background:white;
    margin-top:5px;
    cursor: pointer;
    &:hover{
        background:red;
    }
}

@media screen and (max-width:768px){
    font-size:12px;
    .btn{

padding:5px 5px;
font-size:10px;

}
}
`


export const RightDown=styled.div`
margin-top:20px;
background:white;
padding:20px 10px;
 flex:0.3;
 border-radius:10px;
 text-align:center;
 height:fit-content;

.btn{
    border:1px solid blue;
    border-radius:19px;
    padding:5px 20px;
    background:white;
    margin-top:20px;
    color:blue;
}
@media screen and (max-width:478px){
   margin-bottom:70px;
}

@media screen and (max-width:768px){
    font-size:12px;
    .btn{

    padding:5px 10px;
    font-size:10px;
  
}
    }
`