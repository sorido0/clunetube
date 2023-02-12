import moment from "moment/moment"
import 'moment/locale/es';
//moment.locale('es');

export const VideoFecha = ({ fecha }) => {

    const fechaStrin = moment(fecha, "YYYY-MM-DD").format(" DD-MM-YYYY");
    //console.log(fechaStrin)

    //fechaStrin.set({ date: 6, month: 3, year: 2020, hour: 5, minute: 30, second: 0 })
    const day = moment(fecha).format("dddd");
    const hour = moment(fecha).format("LT");
    const months = moment(fecha).format("MMMM");
    
    const momentoPublicado = "El " + fechaStrin; 
    return (

    <div>{ momentoPublicado }</div>
  )
}
