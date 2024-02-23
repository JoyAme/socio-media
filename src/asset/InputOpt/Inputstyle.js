import {styled} from 'styled-components'




export const Inputwrap=styled.div`
.options{
    text-align:center;
    margin-top:10px;
    display:flex;
    gap:5px;
    
    align-items:center;
    /* line-height:0.2rem; */
}
h1{
    font-size:25px;
}
/* &:hover{
    background:grey;

    border-radius:10px;
} */

@media screen and (max-width:478px){
    h1{
      font-size:12px;
    }
    h5{
        font-size:13px;
    }
}
@media screen and (max-width:768px){
  .option h5{
    font-size:10px;

  } 
}
`