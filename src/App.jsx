import "./input.css"
import { getvideo } from './api/getVideo';
import {  Feed, BuscarResultado, Hearder, BuscarResultadoVideo, VideoPlayer } from './components';
import { Route, Routes } from "react-router-dom";


function App() {

  const { x , videoIniciar, buscarVideo } = getvideo();


  return (
    <div className="flex flex-col h-full">
       <Hearder />
      <Routes>

        <Route path="/" element={<Feed />} />
        <Route path="buscar" element={<BuscarResultado />} />
        <Route path="videoplayer" element={<VideoPlayer />} />
        <Route path="video/:id" element={<BuscarResultadoVideo />} />
        
      </Routes>
    </div>
  )
}

export default App
