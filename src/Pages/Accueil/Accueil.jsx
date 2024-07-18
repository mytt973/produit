import React, { useEffect, useState } from 'react'
import Produit from '../../model/Produit';
import api from '../../api/api';
import './Accueil.css'
import { Card } from '../../components';

export default function Accueil () {
  const [ produits,setProduits]=useState([]);
  const [ produit,setProduit]=useState(null);


  const recupProduits= async ()=>{
    let listProduit=[];
  api.post('api/produit/all',{}).then(function (reponce) {
    reponce.data.map(produit=>{
      
   const prod=new Produit(produit.description,produit.id,produit.nom,produit.prix,produit.image,produit.tail);
    listProduit.push(prod)
    return null

  })
  setProduits(listProduit)
  }).catch(function (err) {console.log(err);})
}

const unique=async(e)=>{
  const url = `api/produit/${e.target.id}`;
  api.post(url,{}).then(function (reponce) {
    setProduit( new Produit(reponce.data.description,reponce.data.id,reponce.data.nom,reponce.data.prix,reponce.data.image,reponce.data.tail));
  }).catch(function (err) {console.log(err);})



}


const deUnique=()=>{

setProduit(null); 

console.log(produit);
}


useEffect(()=>
{
    recupProduits()
},[])



  return (
    <>
    
      
  {produit?<>
  <Card key={`${produit.index} dd2`}index={produit.index} txt="X" elem={produit} inc={deUnique}/></>:
  produits.map((elem,index)=>{return(
        <Card key={`${index} dd`}index={elem.id} txt="voir plus" elem={elem} inc={unique}/>
       )
   
    })
  
  }
      
     
     
    

    {}

    </>
  )
}
