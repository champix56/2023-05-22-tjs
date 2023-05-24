import React from 'react'
import PropTypes from 'prop-types'
import { MemeSVGViewer } from 'orsys-tjs-meme';
import MemeForm from '../../components/functionnal/MemeForm/MemeForm';

function MemeEditor(props) {

    return (<>
        <MemeSVGViewer meme={meme} image={imgs.find((img) => img.id === meme.imageId)} basePath='' />
        <MemeForm meme={meme} images={imgs} onMemeChange={(meme) => {
            setmeme(meme);
        }} />
    </>
    )
}

MemeEditor.propTypes = {
    id: PropTypes.number,
}

export default MemeEditor
