import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { Document, Page, View, Text, StyleSheet } from '@react-pdf/renderer'
const stylesheet=StyleSheet.create({
    titre:{
        textAlign:'center',
        fontSize:'20pt'
    }
})
export default function UniqueMeme(props) {
    const meme = useSelector(s => s.current)
    const img = useSelector(s => s.listes.images.find(i => i.id === meme.imageId))
    return (
        <Document 
            title={'meme ' + meme.titre} 
            author='champix' 
            creator='champix legrand' 
            language='FR-fr'
            pdfVersion='1.7'
            >
                <Page orientation='landscape' size='A4'>
                    <View debug="true">
                        <Text color='tomato' style={stylesheet.titre} >{meme.titre}</Text>
                    </View>
                </Page>
        </Document>
    )
}
UniqueMeme.propTypes = {
    id: PropTypes.number.isRequired
}