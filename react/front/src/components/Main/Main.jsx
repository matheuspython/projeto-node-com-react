import { useState,useEffect } from "react"
import api from '../../services/api'
import './style.css'
export function Main(){
  const [animes, setAnimes] = useState([]);

  useEffect(() =>{
    api.get('/').then(response => {
      setAnimes(response.data)
    })
  },[])

  async function handleAddAnime() {
    const response = await api.post('/',{
      anime : `anime x ${Date.now()}`,
      nota :"esse anime é assim!",
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIVwXl73W4INH4iri1TbokxeMUT6scmk1htQ&usqp=CAU'
    });

    const anime = response.data

    setAnimes([...animes, anime])
  }
  async function handleRemoveAnime(id) {
    const response = await api.delete(`/${id}`);

    const Index = animes.findIndex(anime => anime.id === id);

    animes.splice(Index,1)

    

    setAnimes([...animes])
  }

  


  return (
    <main>
      <div className="container">
        <ul className="list">
          {animes.map(anime => <li key={animes.id}><p>{anime.anime}: {anime.nota}</p><img src={anime.img} alt={anime.anime} /><button type="button" onClick={()=> handleRemoveAnime(anime.id)}>remover</button></li>)}
        </ul>
        <button type={'button'} onClick={handleAddAnime}>adicionar anime</button>
      </div>
    </main>   
  )
}