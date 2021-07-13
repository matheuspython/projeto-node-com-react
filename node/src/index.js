const express = require("express");
const {uuid} = require('uuidv4');
const cors = require("cors")

const app = express()
app.use(cors())
app.use(express.json())


/* routes */
const animes = []

app.get('/',(req,res) => res.json(animes))

app.post('/',(req, res) => {
  const {anime,nota,img} = req.body;
  const atualAnime = { id: uuid(), anime, nota, img };
 
  animes.push(atualAnime);

  return res.json(atualAnime);
})

app.delete('/:id', (req, res) => {
  const { id } = req.params; 
  
  const findIndex = animes.findIndex(anime => anime.id === id);
  animes.splice(findIndex,1);
  if(findIndex>0) return res.json(animes)
  
  res.status(400).json({erro: 'ocoreu um erro'})
})



app.listen(8888, ()=> console.log('server rodando'))