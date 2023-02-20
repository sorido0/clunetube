
const API_KEY = "AIzaSyBxWO13wmPTmo74rKjtPUYMc5SOLhLvv3Y";
const url = "https://youtube.googleapis.com/youtube/v3/"
// //const API_URL = `search?part=snippet&q=${busscar}&type=video&key=`;

export const getvideoSearch = async(valor = "") => {

    let x = 34;
    let esteBusca = valor
    //let titulo = "sorido0"

    const getvideoSearchIniciar = async (esteBusca) => {

        let adasd = esteBusca

        const resp = await fetch(`${url}${`search?part=snippet&q=${adasd}&type=video&key=`}${API_KEY}`)
        const { items } = await resp.json();
        //console.log(items);
        return items;
        //return adasd;
    }

    //getvideoSearchIniciar(esteBusca)
    const respVideoInicialSearch = await getvideoSearchIniciar(esteBusca);
    console.log(respVideoInicialSearch);
    return {
        x,
        respVideoInicialSearch,
        //* metodo para hacer petición
        getvideoSearchIniciar,
    }

    // console.log(esteBusca);
    // return esteBusca;
};

