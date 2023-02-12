
const API_KEY = "AIzaSyC3oWaMTFJRpCN_ZBw_GSUcctvXEwFW_aE"
const url = "https://youtube.googleapis.com/youtube/v3/"
const API_URL = `videos?part=status&part=snippet&part=contentDetails&part=statistics&chart=mostPopular&maxResults=8&key=`
const buscar = (titulo) => `search?part=status&part=snippet&maxResults=25&q=${titulo}&key=${API_KEY}`
const cantidad = "maxResults=20";

const estePapa = "videos?part=id&part=snippet&part=topicDetails&part=player&part=status&part=contentDetails&chart=mostPopular&maxResults=20&key=[YOUR_API_KEY]";

export const getvideo = async () => {

    let x = 34;
    //let titulo = "sorido0"

    const videoIniciar = async () => {

        const resp = await fetch(`${url}${API_URL}${API_KEY}`)
        const { items } = await resp.json();

        //console.log(items)
        return items;
    }

    const buscarVideo = async (titulo) => {
        const resp = await fetch(`${url}${buscar(titulo)}`)
        const { items } = await resp.json();
        console.log(items)
        console.log(resp)
        return resp;
    }


    const respVideoInicial = await videoIniciar();

    const valores = () => {

        const dsfdwf = {
            title: "",
            channel: "",
            image: "",
            id: "", 
            key: "",
            time: "",
            virificado: "",
            fecha: "",
            reproducciones: "",

        }

        respVideoInicial.map((item) => {
            return (
                dsfdwf.id = item.id,
                dsfdwf.title = item.snippet.title,
                dsfdwf.channel = item.snippet.channelTitle,
                dsfdwf.image = item.snippet.thumbnails.high.url,
                dsfdwf.key = item.id,
                dsfdwf.time = item.contentDetails.duration,
                dsfdwf.virificado = item.snippet.channelTitle,
                dsfdwf.fecha = item.snippet.publishedAt,
                dsfdwf.reproducciones = item.statistics.viewCount
                
                )

        }

        );

        return dsfdwf
    }

    return {
        x,
        respVideoInicial,
        
        //* metodo para hacer petición
        videoIniciar,
        buscarVideo,
        valores,


    }
};



