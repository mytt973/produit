import React from 'react'

export default function Login(props) {

  const tab = props.tab

    
    function Validation(e){
        e.preventDefault();
        let data = {};

    if(tab.length<=2){
         data= {
          "email":tab[0].value,
          "mdp":tab[1].value
        }}
    else{

         data= {
          nom:tab[0].value,
          prenom:tab[1].value,
          email:tab[2].value,
          mdp:tab[3].value,
        }
    }


    if(tab.length===5){
      data = { 
        "nom":tab[0].value,
"description":tab[1].value,
       "prix": parseInt(tab[2].value),
      "image":"https://cdn.idealo.com/folder/Product/6751/2/6751285/s4_produktbild_mittelgross/yves-saint-laurent-libre-eau-de-parfum-50ml.jpg",
       "tail": parseInt( tab[4].value) 
        }
      }

console.log(data,tab);
    props.onSub(data);
  }
  const on =(e,elem)=>{elem.value=(e.target.value); }
  return (

    <>
    <form onSubmit={Validation} id="fromControl" style={{width:300}}>
 {tab.map((elem,index)=>{return(
      <div key={index} className="form-group">
    <input  key={index} type={elem.type} className="form-control"  onChange={(e)=>on(e,elem)} placeholder={elem.place}/>
     </div>
 )})}

  

 

  <button type="submit"  className="btn btn-primary">Submit</button>
   <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>

</form>
</>
  )
}
