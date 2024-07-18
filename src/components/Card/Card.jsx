export default function  Card({inc, index , elem,txt}){
    return(
        <div className="card">
           <h5  className="card-title">{elem.nom} </h5>
          <div className="card-body row">
              <img  src={elem.image} className='col-4' alt='test' height="auto"/>
           <div className=" col">    
           <p  className='row'> tail : {elem.tail} ml</p>
           <p className='row'> Prix : {elem.prix} $ </p>
          </div>
          {!index&&( <p  className="card-text">{elem.description}</p>)}
           </div>
           {!index&&(<button className=" col btn btn-success">Commander</button>)}
           <button className="col btn btn-danger mt-2" id={index}  onClick={inc}> {txt}</button>
         
  
        </div>    
        )
}