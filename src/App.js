import {useState,useEffect} from "react";
import './App.css';
import Player from './components/Player';

const App=()=> {
  const [songs] = useState([
    {
        "title": "testing",
        "artist": "notparth!",
        "img_src": "./track_images/pexels-ekaterina-3128080.jpg",
        "src": "./tracks/actual daftMASTER.wav"
    },    {
      "title": "testing 2",
      "artist": "notparth!",
      "img_src": "./track_images/pexels-ekaterina-3128080.jpg",
      "src": "./tracks/actual daftMASTER.wav"
  },
]);

const [currentSongIndex,setCurrentSongIndex] = useState(0);
const [nextSongIndex,setNextSongIndex] = useState(currentSongIndex + 1);


useEffect(()=>{
  setNextSongIndex(()=>{
  if (currentSongIndex + 1 >songs.length - 1 ){
    return 0;
  } else{
    return currentSongIndex + 1;
  }
});
},[currentSongIndex])


  return (
    <div className="App">
      GAGA
      <Player currentSongIndex={currentSongIndex} setCurrentSongIndex={setCurrentSongIndex} nextSongIndex={nextSongIndex} songs={songs} />
    </div>
  );
}

export default App;
