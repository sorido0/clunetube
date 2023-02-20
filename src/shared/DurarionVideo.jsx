import moment from "moment/moment"
import 'moment/locale/es';
//moment.locale('es');

export const DurarionVideo = ({time}) => {

    const duracionEnSegundos = moment()
      .startOf("day")
      .seconds(time)
      .format("HH:mm:ss")
    
 
  return (
    <div className="absolute bottom-2 right-2 bg-black py-1 px-2 text-white text-xs rounded-md" >
        {duracionEnSegundos}
    </div>
  )
}
