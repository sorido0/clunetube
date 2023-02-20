


import React, { useContext, useEffect } from 'react'
import { AiFillCheckCircle } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { UserContext } from '../contexts'
import { DurarionVideo } from '../shared'


export const VideaCart = ({ video }) => {
    
    const { sadas } = useContext(UserContext);


    const uno = `${video?.stats?.views}`;   
    return (
        <Link to={`/videoplayer/${video?.videoId}`} >
        <div className='flex flex-col rounded-xl mb-8 md:rounded-xl sm:rounded-xl cursor-pointer hover:bg-[#FFFFFF14]'>
            <div className='relative h-48 rounded-xl md:h-40 md:rounded-xl sm:rounded-xl overflow-hidden' >
                <img
                    className='h-full w-full object-cover'
                    src={video?.thumbnails[0]?.url}
                    alt={video?.title}
                />
                { video?.lengthSeconds && <DurarionVideo time={video?.lengthSeconds}  />}
            </div>
            <div className="flex text-white mt-3">
                <div className='flex items-start'>
                    <div className="flex h-9 w-9 rounded-full overflow-hidden">
                        <img 
                            className="h-full w-full object-cover"
                            src={ video?.author?.avatar[0]?.url }	
                            alt={ video?.author?.title	 }
                        />
                    </div>
                </div>
                <div className="flex flex-col ml-3 overflow-hidden" >
                    <span className='text-sm font-bold line-clamp-2 text-white'>
                        {video?.title}
                    </span>
                    <span className='text-[12px] font-semibold mt-2 text-white/[0.7] flex items-center'>
                            { video?.author?.title }
                        { 
                            video?.author?.badges[0]?.text === "Verified" && ( <AiFillCheckCircle className='text-blue-500 text-[12px] ml-1'/>)
                        }
                    </span>

                    <div className="flex text-[12px] font-semibold text-white/[0.7] truncate">
                        <span>
                            {`${sadas(uno)} ` } vistas -    
                        </span>
                        <span>  {video?.publishedTimeText } </span>
                       
                    </div>
                </div>
            </div>
        </div>
        </Link>
    )
}
