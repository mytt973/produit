import React, { useEffect, useState } from 'react'
import api from '../api/api';
import Produit from '../model/Produit';

export default function AdminGestionProduit() {
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
    <h3>AdminGestionProduit</h3>
    <table className='table ms-4'>
        <thead>
            <tr className='row'>
                <td className='col'>nom</td>
                <td className='col'>image</td>
                <td className='col'>prix</td>
            </tr>
        </thead>
        <tbody>
        {produits.map((elem,index)=>{return(
      <tr key={index} className="form-group row">
        <td className='col'>{elem.nom}</td>
        <td className='col'><img src={elem.image} width={50} height="auto" alt='missing'/></td>
        <td className='col'>{elem.prix}</td>
         </tr>
 )})}

        </tbody>

    </table>
</>
  )
}
