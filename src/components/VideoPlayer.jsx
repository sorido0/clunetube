import { useContext, useEffect, useState } from 'react';
import { AiFillDislike, AiFillLike } from "react-icons/ai"
import ReactPlayer from "react-player"
import { useParams } from "react-router-dom";
import { UserContext } from '../contexts';
import { VideoFecha } from "../shared";
import { VideoRelacionados } from "./VideoRelacionados"


// const options = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Key': 'b76523d4admsh003939eda9bd9a1p110f1bjsn91b3be7155d5',
//         'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
//     }
// };


const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'c813b0e02fmsh2b6024844162addp125fa5jsn369c4c6e444f',
        'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
};

export const VideoPlayer = () => {

    const { loading, setLoading, sadas } = useContext(UserContext)
    const [video, setVideo] = useState();
    const [videosRelaciones, setVideosRelaciones] = useState([]);
    const id = useParams();

    useEffect(() => {
        document.getElementById("root").classList.add("custom-h")
        detallesVideos();
        videosRelacionados();


    }, [id])

    const detallesVideos = async () => {
        setLoading(true)
        const response = await fetch(`https://youtube138.p.rapidapi.com/video/details/?id=${id.id}&hl=en&gl=US`, options)
        const data = await response.json()
        setVideo(data)
        setLoading(false)
        //console.log(data)
    }

    const videosRelacionados = async () => {
        setLoading(true)
        const response = await fetch(`https://youtube138.p.rapidapi.com/video/related-contents/?id=${id.id}&maxResults=20`, options)
        const data = await response.json()
        setVideosRelaciones(data)
        setLoading(false)
        //console.log(data)
    }


    const uno = `${video?.stats?.views}`;
    let likesV = `${video?.stats?.likes}`;

     return (
        <div className="flex justify-center flex-row h-[cal(100%-56px)] bg-black">
            <div className="w-full max-w-[1280px] flex flex-col rounded-xl lg:flex-row">
                <div className="flex flex-col lg:w-[calc(100%-350px)] xl:w-[100%-400px] px-4 py-3 lg:py-6 overflow-y-auto">
                    <div className="h-[200px] sm:h-[350px] md:h-[400px] lg:h-[400px] xl:h-[550px] ml-[-16] lg:ml-0 mr-[-16pxp] lg:mr-0 mb-5">
                        <ReactPlayer
                            url={`https://www.youtube.com/watch?v=${id.id}`}
                            controls
                            width="100%"
                            height="100%"
                            style={{ backgroundColor: "#000" }}
                            className="rounded-lg"

                        />
                        <div className="text-white font-bold text-sm md:text-xl mt-3 mb-3 line-clamp-2">
                            {!loading && video?.title || "Cargando..."}
                        </div>
                    </div>

                    <div className="flex flex-col justify-between md:flex-row mt-12 p-2 rounded-xl bg-[#ffffff14]">
                        <div className="flex">
                            <div className="flex items-start">
                                <div className="flex h-11 w-11 rounded-full overflow-hidden">
                                    <img className="h-full w-full object-cover" src={video?.author?.avatar[0]?.url} alt={video?.author?.title} />
                                </div>
                            </div>

                            <div className="flex flex-col ml-3">
                                <div className="text-white text-md font-semibold flex items-center">
                                    {video?.author?.title}
                                </div>
                                <div className="text-white/[0.7] text-sm">
                                    {`${sadas(uno)} `} vistas - {video?.publishedDate}
                                </div>
                            </div>

                        </div>

                        <div className="flex text-white mt-4 md:mt-0">
                            <div className="flex items-center justify-center h-11 px-3 rounded-3xl bg-white/[0.15] ml-4">
                                <AiFillLike className="text-white text-xl mr-1" />
                                <span className="text-white text-sm font-semibold">{`${sadas(likesV)}` + " Likes"}</span>
                            </div>
                            <div className="flex items-center justify-center h-11 px-3 rounded-3xl bg-white/[0.15] ml-4">
                                <AiFillDislike className="text-white text-xl mr-1" />
                                <span className="text-white text-sm font-semibold">{video?.lengthSeconds + " Dislike"}</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex text-white h-max-[150px] font-bold text-sm mt-4">
                        <div className='flex h-18 overflow-hidden'>
                            <pre>
                                {video?.description}
                            </pre>
                        </div>
                    </div>
                </div>

                {/* Lista de videos relacionados */}
                <div className="flex flex-col lg:w-[350px] xl:w-[400px] px-4 py-3 lg:py-6 overflow-y-auto bg">
                    <div className="text-white font-bold text-sm md:text-xl mt-4">

                        {
                            videosRelaciones?.contents?.map((item, index) => {
                                if(item.type !== "video") return false; 
                                // console.log(item)
                               return  (
                                    <VideoRelacionados
                                        key={index}
                                        video={item?.video}
                                    />
                                );
                            })

                        }

                      

                    </div>
                </div>
            </div>
        </div>

    )
}
