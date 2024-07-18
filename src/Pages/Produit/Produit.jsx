import axios from 'axios';
import React, { useState } from 'react'
import { ProduitL, Login } from '../../components';

export default function Produit() {
    const user = localStorage.getItem("use");
    const [produits,setProduits]=useState([])
    const [fromulaire,setFromulaire]=useState(false)
const tab=[
    {
        place:"nom",
        type:"text",
        value:""
    },
    {
        place:"description",
        type:"text",
        value:""
    },
    {
        place:"prix",
        type:"text",
        value:""
    },
    {
        place:"image",
        type:"text",
        value:""
    },
    {
        place:"tail",
        type:"text",
        value:""
    },
];

    
    const tog =()=>{setFromulaire(!fromulaire)}

    const  onAdd =async(data)=>{
        try {
            const reponce= await axios.post("https://api-dev.akov-developpement.fr/api/produit/save",data  ) 
            console.log(reponce);
            
        } catch (error) {
            console.log("erruer");
        }
    }
    //getin();

   async function onGet(){
    try {
        const reponce= await axios.post("https://api-dev.akov-developpement.fr/api/produit/all",{}) 
        console.log(reponce);
        setProduits(reponce.data);
        console.log(produits);

    } catch (error) {
        console.log("erruer2");
    }

    
}
   
  return (
  <div style={{position:'relative',left:350}}>
  {user?.nom} est connetter
<h4>gestion des produits</h4>
{
  produits.map((element,index)=>{
    return(
        <ProduitL key={index} produit={element}/>
    )
})
}

<button onClick={onGet}>click to refreche</button>
  <button onClick={tog}>array+</button>
 {fromulaire?<Login tab={tab}  onSub={onAdd}/>:<p>not active</p>}
  </div>



  )
}
