import React, { useEffect, useState } from 'react'
import Produit from '../../../model/Produit';
import api from '../../../api/api';
import './Accueil.css'

export default function Accueil () {
  const [ produits,setProduits]=useState([]);
  const recupProduits= async ()=>{
    let listProduit=[];
api.post('api/produit/all',{}).then(function (reponce) {
    reponce.data.map(produit=>{
      
   const prod=new Produit(produit.description,produit.id,produit.nom,produit.prix,produit.image,produit.tail);
    listProduit.push(prod)
    return null

})
    setProduits(listProduit)
}).catch(function (err) {

    
})
}
useEffect(()=>
{
    recupProduits()
},[])



  return (
    <>
    {produits.map((elem,index)=>{
      return(
      <div key={`${index} d`} className="card  " style={{width:400}} >
         <h5 key={`${index} dg`} className="card-title">{elem.nom} </h5>
        <div key={`${index} s`} className="card-body row">
            <img key={`${index} sd`} src={elem.image} className='col-3' alt='test' width={50} height="auto"/>
         <div key={`${index} s`} className=" col">    
         <p  key={`${index} z`}className='row'> tail : {elem.tail}</p>
         <p key={`${index} a`} className='row'> Prix : {elem.prix}</p>
        </div>
        <p key={`${index} ad`} className="card-text">{elem.description}</p>
        <button key={`${index} add`} > clicker dessu</button>
        </div>

      </div>    
      )
    })}

    </>
  )
}
