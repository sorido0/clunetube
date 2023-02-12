
import { useState } from 'react';
import { getvideo } from '../api/getVideo';
import { UserContext } from './UserContext';


const { valores, respVideoInicial } = await getvideo();

const wewew = [];

export const UserProvider = ({ children }) => {

    const [mostrar, setmostrar] = useState(false)

    const mostrarMenu = () => {
        setmostrar(!mostrar)
       // console.log(mostrar)
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

  return (
     <UserContext.Provider value={{ mostrar, mostrarMenu, sadas, respVideoInicial, valores }}>
        {children}
     </UserContext.Provider>
  )
}
