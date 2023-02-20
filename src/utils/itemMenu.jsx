
import React from 'react';

import { AiFillMobile, AiFillPlayCircle, AiOutlineBulb, AiOutlineFire, AiOutlineHome, AiOutlineQuestionCircle, AiOutlineSetting, AiOutlineYoutube } from "react-icons/ai";
import { IoLogoGameControllerB, IoMdFilm, IoMdMusicalNote } from "react-icons/io";
import { MdLiveTv, MdOutlinedFlag, MdOutlineQuestionAnswer } from "react-icons/md";
import { GiTrophyCup } from "react-icons/gi";
import { CiYoutube } from "react-icons/ci";
import { FaYoutubeSquare } from "react-icons/fa";

export const itemMenu = [

    
  
    { name: 'Principal', icon: <AiOutlineHome />, type: "inicio" },
    // { name: "Shorts", icon: <AiFillMobile />, type: "inicio" },
    { name: "Tendencias", icon: <AiOutlineFire />, type: "inicio", dividir: true },
    // { name: "Musica", icon: <IoMdMusicalNote />, type: "categoria" },
    // { name: "Live", icon: <MdLiveTv />, type: "categoria" },
    { name: "Videosjuegos", icon: <IoLogoGameControllerB />, type: "categoria" },
    { name: "Deportes", icon: <GiTrophyCup />, type: "categoria" },
    { name: "Aprendizaje", icon: <AiOutlineBulb />, type: "categoria", dividir: true },
    { name: "Youtube Premium", icon: <AiOutlineYoutube />, type: "youtube" },
    { name: "Youtube Music", icon: <AiFillPlayCircle />, type: "youtube" , dividir: true },
    // { name: "Youtube Kids", icon: <FaYoutubeSquare />, type: "youtube" },
    // { name: "Youtube Live", icon: <CiYoutube />, type: "youtube", dividir: true },
    { name: "Configuracion", icon: <AiOutlineSetting />, type: "ajustes" },
    { name: "Historial de denuncias", icon: <MdOutlinedFlag />, type: "ajustes" },
    { name: "Ayuda", icon: <AiOutlineQuestionCircle />, type: "ajustes" },
    { name: "Enviar comentarios", icon: <MdOutlineQuestionAnswer />, type: "ajustes" },

];

//console.log(itemMenu[0]);
