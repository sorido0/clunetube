
import { useEffect, useState } from 'react';
import { getvideo } from '../api/getVideo';
import { UserContext } from './UserContext';
import { getVideoRapiAppi } from '../api/getVideoRapiAppi';


const { valores, respVideoInicial } = await getvideo();


export const UserProvider = ({ children }) => {

    const [mostrar, setmostrar] = useState(false)
    const [loading, setLoading] = useState(false);
    const [categoria, setCategoria] = useState("New");
    const [ resultados , setResultados ] = useState([]);

    useEffect(() => {
      buscarvideosDe(categoria)
    }, [setCategoria])
    

    const mostrarMenu = () => {
        setmostrar(!mostrar)
       // console.log(mostrar)
    }

    const buscarvideosDe = async () => {
        setLoading(true);
        const data = await getVideoRapiAppi(categoria);
        //console.log(data);
        setResultados(data);
        setLoading(false);
    }

    const sadas = (vistasView) => {
      const primerValor = vistasView.length;
      if (vistasView >= 1000000) {
          return vistasView.substring(0,1, primerValor - 6) + "M";
      }

      else if (vistasView >= 1000) {
          return vistasView.substring(0,1, primerValor - 3) + "K";
      }
      
      else {
          return vistasView;
      }
     
  }

  const videos = resultados.contents;
   
  return (
     <UserContext.Provider value={{ 
            mostrar, 
            respVideoInicial, 
            valores, 
            loading,
            videos, 

            //! funciones
            mostrarMenu, 
            sadas,
            setCategoria,
            buscarvideosDe,
            setLoading
            

        }}>
        {children}
     </UserContext.Provider>
  )
}
