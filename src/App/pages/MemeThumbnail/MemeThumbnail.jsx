import React from 'react'
import PropTypes from 'prop-types'
import { connect, useSelector, useDispatch } from 'react-redux'
import { MemeSVGThumbnail } from 'orsys-tjs-meme'

function MemeThumbnail() {
    const memes = useSelector(s => s.listes.memes)
    const images = useSelector(s => s.listes.images)
    return (
        <MemeSVGThumbnail memes={memes} images={images} basePath=''/>
    )
}
// function mapsStateToProps(storeState,parentProps){
//     return {...parentProps,memes:storeState.listes.memes,images:storeState.listes.images}
// }
// function mapDispatchToProps(dispatch){
//     return {onMemeChange:(meme)=>dispatch(changeMeme)}
// }
// export const ConnectedComponentMemeThumbnail=connect(mapsStateToProps,mapDispatchToProps)(MemeThumbnail)
export default MemeThumbnail
