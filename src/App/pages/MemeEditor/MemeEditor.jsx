import React from 'react'
import PropTypes from 'prop-types'
import { MemeSVGViewer } from 'orsys-tjs-meme';
import MemeForm from '../../components/functionnal/MemeForm/MemeForm';
import StoreMemeForm from '../../components/functionnal/MemeForm/StoreMemeForm';
import {useSelector} from 'react-redux'
function MemeEditor(props) {

    return (<>
        <MemeViewer />
        <StoreMemeForm />
    </>
    )
}
MemeEditor.propTypes = {
    id: PropTypes.number,
}

export default MemeEditor

function MemeViewer() {

    const currentFromeStore = useSelector(s => s.current)
    const imageFromeStore = useSelector(s => s.listes.images.find((img) => img.id === currentFromeStore.imageId))
    return (
        <MemeSVGViewer meme={currentFromeStore} image={imageFromeStore} basePath='' />
    )
}

