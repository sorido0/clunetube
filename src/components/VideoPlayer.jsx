import { AiFillDislike, AiFillLike } from "react-icons/ai"
import ReactPlayer from "react-player"
import { VideoFecha } from "../shared";
import { VideoRelacionados } from "./VideoRelacionados"





export const VideoPlayer = () => {

    const r = localStorage.getItem("video");
    //JSON.stringify(r)
    const { title, channel, image, id, fecha, reproducciones, likes, descricion } = JSON.parse(r)
    // console.log(id)


    // console.log({ title, channel, image, id, key, time, virificado, fecha, reproducciones  })
    return (
        <div className="flex justify-center flex-row h-[cal(100%-56px)] bg-black">
            <div className="w-full max-w-[1280px] flex flex-col rounded-xl lg:flex-row">
                <div className="flex flex-col lg:w-[calc(100%-350px)] xl:w-[100%-400px] px-4 py-3 lg:py-1 overflow-y-auto">
                    <div className="h-[200px] sm:h-[350px] md:h-[400px] lg:h-[400px] xl:h-[550px] ml-[-16] lg:ml-0 mr-[-16pxp] lg:mr-0">
                        <ReactPlayer
                            url={`https://www.youtube.com/watch?v=${id}`}
                            controls
                            width="90%"
                            height="90%"
                            style={{ backgroundColor: "#000" }}
                            className="rounded-lg"

                        />
                        <div className="text-white font-bold text-sm md:text-xl mt-4">
                            {title}
                        </div>
                    </div>

                    <div className="flex justify-between flex-col md:flex-row">
                        <div className="flex">
                            <div className="flex items-start">
                                <div className="flex h-9 w-9 rounded-full overflow-hidden">
                                    <img className="h-full w-full object-cover" src={image} alt={channel} />
                                </div>
                            </div>

                            <div className="flex flex-col ml-3">
                                <div className="text-white text-md font-semibold flex items-center">
                                    {channel}
                                </div>
                                <div className="text-white/[0.7] text-sm">
                                    {reproducciones} vistas - <VideoFecha fecha={fecha} />
                                </div>
                            </div>

                        </div>

                        <div className="flex text-white mt-4 md:mt-0">
                            <div className="flex items-center justify-center h-11 px-6 rounded-3xl bg-white/[0.15] ml-4">
                                <AiFillLike className="text-white text-xl mr-2" />
                                <span className="text-white text-sm font-semibold">{likes + "Likes"}</span>
                            </div>
                            <div className="flex items-center justify-center h-11 px-6 rounded-3xl bg-white/[0.15] ml-4">
                                <AiFillDislike className="text-white text-xl mr-2" />
                                <span className="text-white text-sm font-semibold">{reproducciones + "Views"}</span>
                            </div>
                        </div>

                    </div>

                    <div className="text-white font-bold text-sm md:text-xl mt-4">
                      
                    </div>

                </div>

                {/* Lista de videos relacionados */}
                <div className="flex flex-col lg:w-[350px] xl:w-[400px] px-4 py-3 lg:py-6 overflow-y-auto">
                    <div className="text-white font-bold text-sm md:text-xl mt-4">
                        <VideoRelacionados
                            title={title}
                            id={id}
                        />
                    </div>
                </div>



            </div>

        </div>

    )
}
