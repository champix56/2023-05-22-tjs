import React from 'react'
import MemeForm from './MemeForm'
import { useDispatch, useSelector } from 'react-redux'
import { changeMeme, clearMeme, saveCurrent } from '../../../store/current.js'
export default function StoreMemeForm() {
  const fnStoreDispatch = useDispatch();
  const imagesFromeStore = useSelector(s => s.listes.images)
  const currentFromeStore = useSelector(s => s.current)
  const onMemeChange = (meme) => {
    fnStoreDispatch(changeMeme(meme));
    //changeMeme -> createur d'action pour gen {type:'current/change',payload:meme}
  }
  return (
    <MemeForm
      images={imagesFromeStore}
      meme={currentFromeStore}
      onMemeChange={onMemeChange}
      onSaveMeme={(meme) => {
        fnStoreDispatch(saveCurrent(meme));
      }}
      onClearMeme={() => {
        fnStoreDispatch(clearMeme());
      }} />
  )
}
