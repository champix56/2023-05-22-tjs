import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { Document, Page, View, Text, StyleSheet, Svg, Image } from '@react-pdf/renderer'
const stylesheet = StyleSheet.create({
    titre: {
        textAlign: 'center',
        fontSize: '20pt'
    }
})
export default function UniqueMeme(props) {
    return (
        <Document
            title={'meme ' + props.meme.titre}
            author='champix'
            creator='champix legrand'
            language='FR-fr'
            pdfVersion='1.7'
        >
            <Page orientation='landscape' size='A4'>
                <View debug="true">
                    <Text color='tomato' style={stylesheet.titre} >{props.meme.titre}</Text>
                </View>
                <View debug={true}>
                    <Svg viewBox={`0 0 ${props.image ? props.image.w : '1000'} ${props.image ? props.image.h : '1000'
                        }`} >
                        {undefined !== props.image && (
                            <Image src={`${props.basePath}${props.image.url}`}  x='0' y='0' />
                        )}
                        <Text
                            x={props.meme.x}
                            y={props.meme.y}
                            fontSize={props.meme.fontSize}
                            fill={props.meme.color}
                            textDecoration={props.meme.underline ? 'underline' : 'none'}
                            fontStyle={props.meme.italic ? 'italic' : 'normal'}
                            fontWeight={props.meme.fontWeight}
                        >

                            {props.meme.text}
                        </Text>
                    </Svg>
                </View>
            </Page>
        </Document >
    )
}
UniqueMeme.propTypes = {
    meme: PropTypes.object.isRequired,
    img: PropTypes.object.isRequired
}