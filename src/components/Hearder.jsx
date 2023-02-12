
import { useContext } from 'react';


import { AiOutlineMenu, AiOutlineSearch, AiOutlineVideoCameraAdd, AiOutlineBell } from 'react-icons/ai';
import { UserContext } from '../contexts';
import { Loading } from '../shared';


export const Hearder = () => {


    const { mostrarMenu, respVideoInicial } = useContext(UserContext);




    return (
        <div className="sticky pt-2 pb-2 top-0 z-10 flex flex-row items-center justify-between h-14 px-4 md:px-5 bg-white dark:bg-black ">
             {
                !respVideoInicial?  <Loading /> : null  
             }

            <div className="flex h-5 items-center">

                {/* Impotamos la sgv de la imegen de youtube y menu  */}
                <div 
                    className='flex cursor-pointer items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]'
                    onClick={ mostrarMenu }
                >

                 <AiOutlineMenu className='text-white mr-2 cursor-pointer hover:bg-gray-800' /> 
                </div>
                <img className="h-full hidden dark:md:block " src="src/assets/youtube.svg" alt="youtube" />
                <img className="h-full md:hidden" src="src/assets/youtube.svg" alt="youtubeMovil" />
                <h1 className='text-white text-center text-xl'>Youtube</h1>

            </div>
            <div className='group flex items-center'>
                <div className="flex h-8 md:h-10 md:ml-10 md:pl-5 border border-[#303030] rounded-l-3xl group-focus-within:border-blue-500 md:group-focus-within:ml-5 md:group-focus-within:pl-0">
                    <div className='w-10 items-center justify-center hidden group-focus-within:md:flex'>
                        <AiOutlineSearch className='text-gray-500 text-xl' />
                    </div>

                    <input
                        className='bg-transparent outline-none text-white pr-5 pl-5 md:pl-0 w-44 md:group-focus-within:pl-0 md:w-64 lg:w-[500px]'
                        type="text"
                        placeholder='Buscar'
                    />
                </div>
                <button className='w-[40px] md:w-[60px] h-8 md:h-10 flex items-center justify-center border border-l-0 border-[#303030] rounded-r-3xl bg-white/[0.1]'>
                    <AiOutlineSearch className='text-white  text-xl' />
                </button>

            </div>
            <div className='flex items-center space-x-4'>
                <div className="hidden md:flex">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]">
                        <AiOutlineVideoCameraAdd className='text-white text-xl cursor-pointer' />
                    </div>
                    <div className="flex items-center justify-center h-10 w-10 ml-2 rounded-full hover:bg-[#303030]/[0.6]">
                        <AiOutlineBell className='text-white text-xl cursor-pointer' />
                    </div>
                    <div className="flex h-8 w-8 overflow-hidden rounded-full md:ml-4">
                        <img src="https://lh3.googleusercontent.com/a/AEdFTp5ej2kHmCMwd9IEMPW9SaDYnAeMLT3fpl0-WgDEMbo=s432-p-rw-no" alt="sorido0" />
                    </div>
                </div>
            </div>
        </div>
    )
}
