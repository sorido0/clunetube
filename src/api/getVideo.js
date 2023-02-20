


const API_KEY = "AIzaSyBxWO13wmPTmo74rKjtPUYMc5SOLhLvv3Y";
const url = "https://youtube.googleapis.com/youtube/v3/"
const API_URL = `videos?part=status&part=snippet&part=contentDetails&part=statistics&chart=mostPopular&maxResults=12&key=`

export const getvideo = async () => {

    let x = 34;
    //let titulo = "sorido0"

    const videoIniciar = async () => {

        const resp = await fetch(`${url}${API_URL}${API_KEY}`)
        const { items } = await resp.json();
        return items;
    }

    const respVideoInicial = await videoIniciar();
    return {
        x,
        respVideoInicial,
        //* metodo para hacer petición
        videoIniciar,
     


    }
};



