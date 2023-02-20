import React, { useContext } from 'react'
import { AiFillCheckCircle } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import { UserContext } from '../contexts';
import { DurarionVideo } from '../shared'

export const VideoRelacionados = ({ video }) => {

    const { sadas } = useContext(UserContext);
    //console.log("Vine")
    const uno = `${video?.stats?.views}`;


    return (
        <Link to={`/videoplayer/${video?.videoId}`} >

            <div className='flex mb-3 cursor-pointer hover:bg-[#FFFFFF14] ' key={video?.videoId}>
                <div className='relative h-40 lg:h-20 xl:h-24 w-40 min-w-[168px] lg:w-32 lg:min-w-[128px] xl:w-40 xl:min-w-[168px] rounded-xl bg-slate-800 md:rounded-xl sm:rounded-xl overflow-hidden'>
                    <img
                        className='h-full w-full object-cover'
                        src={video?.thumbnails[0]?.url}
                        alt={video?.title}
                    />
                    { video?.lengthSeconds && <DurarionVideo time={video?.lengthSeconds} />}
                </div>
                <div className="flex flex-col ml-3 overflow-hidden text-white mt-3">
                    <span className='text-sm lg:text-xs xl:text-sm font-bold line-clamp-2 '>
                        {video?.title}
                    </span>
                    <span className='text-[12px] lg:text-[10px] xl:text-[12px] font-semibold mt-2 text-white/[0.7] flex items-centerfle'>
                        {video?.author?.title}
                        {
                            video?.author?.badges[0]?.text === "Verified" && (<AiFillCheckCircle className='text-blue-500 text-[12px] ml-1' />)
                        }
                    </span>

                    <div className="flex text-[12px] lg:text-[10px] xl:text-[12px] font-semibold text-white/[0.7] truncate overflow-hidden">
                        <span>
                            {`${sadas(uno)} `} vistas -
                        </span>
                        <span className='truncate'>  {video?.publishedTimeText} </span>
                    </div>

                </div>
            </div>

        </Link>
    )
}
