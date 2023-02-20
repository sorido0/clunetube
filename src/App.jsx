import "./input.css"
import { Feed, BuscarResultado, Hearder, BuscarResultadoVideo, VideoPlayer, LeftNav } from './components';
import { Route, Routes } from "react-router-dom";


function App() {

 

  return (
    <div className="flex flex-col h-full">
      <Hearder />
      
      <Routes>

        <Route path="/" element={<Feed />} />
        <Route path="buscar" element={<BuscarResultado />} />
        <Route path="videoplayer/:id" element={<VideoPlayer />} />
        <Route path="video/:id" element={<BuscarResultadoVideo />} />

      </Routes>
    </div>
  )
}

export default App
