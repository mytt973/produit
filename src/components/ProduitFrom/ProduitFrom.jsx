import React from 'react'

export default function produitFrom({fonct}) {
    
    function Validation(e){
        e.preventDefault();
        
        const data = { 
          "nom" : e.target[0].value, 
  "description" : "En 2019, ce parfum a rejoint le répertoire des parfums d'Yves Saint Laurent. Derrière la création se trouvent Anne Flipo et Carlos Benaïm.", 
         "prix" : 90, 
        "image" : "https://cdn.idealo.com/folder/Product/6751/2/6751285/s4_produktbild_mittelgross/yves-saint-laurent-libre-eau-de-parfum-50ml.jpg", 
         "tail" : 50
          } 
  fonct(data)

        
    }

  return (

    <>
    <form onSubmit={Validation} style={{width:300}}>
  <div className="form-group">
    <input type="text" className="form-control"  placeholder="image"/>
     </div>
  <div className="form-group" style={{marginTop:30}}>

    <input type="" className="form-control"  placeholder="description"/>
  </div>
  <div className="form-group"  style={{marginTop:30}}>
    <input type="text" className="form-control"  placeholder="prix"/>
     </div>
  <div className="form-group" style={{marginTop:30}}>

    <input type="text" className="form-control"  placeholder="tail"/>

  <div className="form-group" style={{marginTop:30}}>

    <input type="text" className="form-control"  placeholder="nom"/>
  </div>
  </div>
  <button type="submit"  className="btn btn-primary"  style={{marginTop:30}}>Submit</button>
   <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>

</form>
</>
  )
}