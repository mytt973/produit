import React, {  useState } from 'react'
import {Login } from '../../../components'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
// import api from '../../../api/api'
// import {  useNaviqgate, } from 'react-router-dom'

export default function Home() {
    const [login,setLogin]=useState(false)
    const [ info,setInfo]=useState(null)
    const navigate = useNavigate();

    // const navigate = useNavigate;
    const  onLogin=async (data)=>{

    //  const fu = ()=>{   api.post('/api/users/save',data).then(function () {
    //        alert("tu t enregistre")
    //         console.log("reponce"); 
    //         navigate('/admin')  
           
    //     } 
    //     ).catch(function (erreur) {
    //         alert(erreur)

    //     });}

        try {
            const  reponce = await axios.post("https://api-dev.akov-developpement.fr/api/users/save",data)
            alert("tu t enregistre");
          
            console.log(reponce);
    } catch (error) {  
        console.log("erreur");
    }
}


    const onConnection =async (data)=>{
        try {
        const reponce =await axios.post("https://api-dev.akov-developpement.fr/api/users/login",data)
        console.log(reponce.data,8,reponce.status);
        setInfo(reponce.data);
    } catch (error) {
        console.log("erreur");          
        alert("email or password not found ")
    }
    console.log("tu t connectter" ,info);navigate('/user');
}


    const LogChange=()=>{
        setLogin(!login)
    }

const onDeconnect=()=>{
    setInfo(null);
}





   const getTab=(boll)=> {
let tab = boll?[
    {
        place:"email",
        type:"text",
        value:""
    },
    {
        place:"pass",
        type:"password",
        value:""
    }
]:[
    {
        place:"nom",
        type:"text",
        value:""
    },
    {
        place:"prenom",
        type:"text",
        value:""
    },
    {
        place:"email",
        type:"text",
        value:""
    },
    {
        place:"pass",
        type:"text",
        value:""
    }];
    return tab;
}



  return (
 <>

        
        {info?(
            <>
                <button onClick={onDeconnect}>ce deconnecter {info?.email} {info.nom}</button>
            </>
        ):( 
            <>
                {login?<Login  tab={getTab(false)} onSub={onLogin}/> : <Login tab={getTab(true)} onSub={onConnection}/>}
                <button className='btn btn-secondary' onClick={LogChange}> {!login?"inscription":"connection"} </button>
            </>
        )}


   </>
  )
}
