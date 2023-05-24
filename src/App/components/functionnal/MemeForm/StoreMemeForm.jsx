import React from 'react'
import MemeForm from './MemeForm'
import {useDispatch, useSelector} from 'react-redux'
import {changeMeme} from '../../../store/current.js'
export default function StoreMemeForm() {
    const fnStoreDispatch=useDispatch();
    const imagesFromeStore=useSelector(s=>s.listes.images)
    const onMemeChange=(meme)=>{
        fnStoreDispatch(changeMeme(meme));
        //changeMeme -> createur d'action pour gen {type:'current/change',payload:meme}
    }
  return (
   <MemeForm images={imagesFromeStore} meme={meme} onMemeChange={onMemeChange}/>
  )
}
