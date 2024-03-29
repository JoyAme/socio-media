import {styled} from 'styled-components'

export const Headwrap=styled.div`
    width:100%;
    padding:10px 0;
    position:sticky;
    top:0;
    border-bottom:1px solid whitesmoke;
    background:white;
.linkedin{
    width:40px;
    margin-right:9px;
    border-radius:6px;
    object-fit:contain;
}
.Header-row{
    display:flex;
    justify-content:space-around;
    align-items:center;
}
.search-row{
    display:flex;
    align-items:center;
    padding:8px;
    width:250px;
    border:none;
    border-radius:4px;
    background:#E0EEFA;
}
input{
    outline:0;
    border:none;
    background:#E0EEFA;
}
.search-icon{
    display:flex;
    margin-right:6px;
}
.linked{
    display:flex;
    align-items:center;
}
.icons{
    display:flex;
   margin-right:20px;
}
.icons-right{
    display:flex;
    margin-right:20px;
    border-left:2px solid whitesmoke;
}
.usericon{
    display:none;
}
.btn{
    /* display:none; */
    color:white;
    background:#659CF0;
    border:none;
    cursor: pointer;
    padding:3px 5px;
    border-radius:5px;

}

@media screen and (max-width:478px){
    .Header-row{
        display:block;
       row-gap:20px;
        /* justify-content:space-around;
        align-items:center; */
    }
    .icons{
        display:none;
    }
    .icons-right{
        display:none;
    }
    .usericon{
    display:block;
    font-size:30px;
}
.btn{
    display:block;
    margin-top:10px;

}
}

@media screen and (max-width:768px){
    font-size:14px;
    .icons-right{
        display:none;
    }
    .icons{
        font-size:12px;
    }
}
`