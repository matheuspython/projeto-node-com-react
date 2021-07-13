import { useState,useEffect } from "react"
import api from '../../services/api'

export function Main(){
  const [animes,setAnimes] = useState([]);
  
  return (
    <main>
      <div className="container">
        <ul>
          <li></li>
        </ul>
      </div>
    </main>   
  )
}