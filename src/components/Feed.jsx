

import React, { useContext } from 'react';

import { LeftNav } from './LeftNav';
import { VideaCart } from './VideaCart';
import { UserContext } from '../contexts';


export const Feed = () => {


    const { mostrar, respVideoInicial, sadas } = useContext(UserContext);
    respVideoInicial.map((item) => {
        console.log(item)
    })

   


    return (
        <div className='flex flex-row w-full'>

            {
                !mostrar ? <LeftNav /> : null
                // const margen = mostrar ? "ml-[240px]" : "ml-[0px]"
            }
            <div className='grow overflow-y-auto bg-black'>
                <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-1 ${!mostrar ? "ml-[240px]" : "ml-[0px]"} `} >
                    {

                        respVideoInicial.map((item) => {
                            return (

                                <VideaCart
                                    key={item.id.videoId}
                                    title={item.snippet.title}
                                    channel={item.snippet.channelTitle}
                                    image={item.snippet.thumbnails.medium.url}
                                    id={item.id}
                                    time={item.contentDetails.duration}
                                    virificado={item.status.embeddable}
                                    fecha={item.snippet.publishedAt}
                                    reproducciones={
                                        sadas(item.statistics.viewCount)
                                    }
                                    likes={item.statistics.likeCount} 
                                    descricion={item.snippet.description}                              

                                />

                            )
                        })
                    }

                </div>
            </div>
        </div>
    )
}