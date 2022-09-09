import React,{useEffect} from 'react'
// import jwt from "jsonwebtoken"
import {useNavigate} from "react-router-dom"

const Dashboard = () => {
    const history = useNavigate()

    const populateQuote = async() =>{
        console.log("SUcessss")
    }

    useEffect(() => {
    //   const token = localStorage.getItem('token')
    //   if(token){
    //     const user = jwt.decode(token)
    //     if(!user){
    //         localStorage.removeItem('token')
    //         history.replace("/login")
    //     }else{
    //         populateQuote();
    //     }
    //   }
    
      
    }, [])
    
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard