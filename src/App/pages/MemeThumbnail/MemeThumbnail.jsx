import React from 'react'
import PropTypes from 'prop-types'

function MemeThumbnail(props) {
  return (
    <div className='MemeThumbnail'>
        <MemeSVGThumbnail memes={memes} images={imgs} basePath='' />
    </div>
  )
}
 
export default MemeThumbnail
