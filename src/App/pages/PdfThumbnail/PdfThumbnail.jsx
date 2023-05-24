import React from 'react'
import style from './PdfThumbnail.module.css'
import { useSelector } from 'react-redux'
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer'
import UniqueMeme from '../../pdf/UniqueMeme/UniqueMeme'
export default function PdfThumbnail() {
    const memes = useSelector(s => s.listes.memes)

    const imgs = useSelector(s => s.listes.images)
    return (
        <div className={style.PdfThumbnail}>
            {memes.map((m, i) => {
                return <div className={style.pdfView} key={'pdf-' + i}>
                    <div style={{ textAlign: 'center' }} >{m.titre}</div>
                    <PDFDownloadLink fileName={m.titre + '.pdf'} document={<UniqueMeme meme={m} img={imgs.find(im => im.id === m.imageId)} />} >Cliquez ici</PDFDownloadLink>
                    <br/>
                    <PDFViewer height={'400px'} width={'600px'}>
                        <UniqueMeme meme={m} img={imgs.find(im=>im.id===m.imageId)}/>
                    </PDFViewer>
                </div>
            })}
        </div>
    )
}
