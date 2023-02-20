

import React, { useContext, useEffect } from 'react';

import { LeftNav } from './LeftNav';
import { VideaCart } from './VideaCart';
import { UserContext } from '../contexts';


export const Feed = () => {


    const { mostrar, videos, loading } = useContext(UserContext);

    useEffect(() => {
        document.getElementById("root").classList.remove("custom-h")
        
    }, []);

    
    return (
        <div className='flex flex-row w-full'>

            {
                !mostrar ? <LeftNav /> : null
                // const margen = mostrar ? "ml-[240px]" : "ml-[0px]"
            }
            <div className='grow overflow-y-auto bg-black p-3'>
                <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-1 ${!mostrar ? "ml-[240px]" : "ml-[0px]"} `} >
                    { !loading && videos?.map((item) => {
                            return (

                                <VideaCart
                                    key={item?.video?.videoId}
                                    video= {item?.video}                                    
                                />

                            )
                        })
                    }

                </div>
            </div>
        </div>
    )
}