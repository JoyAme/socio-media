import {styled} from 'styled-components';

export const Iconwrap=styled.div`
   display:flex;
    justify-content:center;
    margin-left:20px;
    cursor: pointer;
.icon-house{
    text-align:center;
   /* line-height:0.1rem;
    height:10%; */
 .icony{
    color: #494949 ;
 }
}
.title{
    margin-top:0;
    color:#999B9C ;
    font-size:12px;
   }
&:hover{
   text-decoration:underline;
}
   @media screen and (max-width:478px) {
      /* display:none; */
      .icony{
        font-size:14px;
      }
     
     .title{
         font-size:10px;
        }
   }
`