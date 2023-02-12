import React from 'react'
import { AiFillCheckCircle } from 'react-icons/ai'
import { DurarionVideo, VideoFecha } from '../shared'




export const VideoRelacionados = ({ title, channel, image, id, key, time, virificado, fecha, reproducciones  }) => {
  return (
    <div className='flex flex-col rounded-xl mb-8 md:rounded-xl sm:rounded-xl cursor-pointer hover:bg-[#FFFFFF14]' key={key}>
            <div className='relative h-48 rounded-xl md:h-40 md:rounded-xl sm:rounded-xl overflow-hidden'key={id}>
                <img
                    className='h-full w-full object-cover'
                    src={image}
                    alt={title}
                />
                <DurarionVideo time={time} key={key} fecha={fecha}/>
            </div>
            <div className="flex text-white mt-3">
                <div className='flex items-start'>
                    <div className="flex h-9 w-9 rounded-full overflow-hidden">
                        <img 
                            className="h-full w-full object-cover"
                            src={image}
                            alt={channel}
                        />
                    </div>
                </div>
                <div className="flex flex-col ml-3 overflow-hidden" >
                    <span className='text-sm font-bold line-clamp-2 text-white'>
                        {title}
                    </span>
                    <span className='text-[12px] font-semibold mt-2 text-white/[0.7] flex items-center'>
                        {channel}
                        { virificado ===  true ? <AiFillCheckCircle className='text-white/[0.5] text-[12px] ml-1'/> : null }
                    </span>

                    <div className="flex text-[12px] font-semibold text-white/[0.7] truncate">
                        <span>
                            {reproducciones} vistas -  
                        </span>
                        {/* <span className="flex text-[24px] leading-none font-bold text-white/[0.7] relative  mx-1">.</span> */}
                        <VideoFecha fecha={fecha}/>
                    </div>
                </div>
            </div>
        </div>
  )
}
