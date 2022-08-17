import Gallery from './component/gallery';
import './App.css';
import{useState, useEffect} from 'react'
import ButtonBar from './component/buttonBar';

function App() {
  let [artId, setArtId] = useState(12720)
  let [data, setData] = useState({})
  
  useEffect(() => {
      document.title='Welcome to Artworld'
      fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${artId}`)
      .then(response => response.json())
      .then(resData => setData(resData))
  }, [artId])
  
// in App.js
// send this function down to <ButtonBar />
const handleIterate = (e) => {
  setArtId(artId + Number(e.target.value))
}


  return (
    <div className="App">
      <h1>Gallery</h1>
      <Gallery objectImg={data.primaryImage} artist={data.artistDisplayName} title={data.title} />
     <ButtonBar handleIterate = {handleIterate}/>
    </div>
  );
}

export default App;
