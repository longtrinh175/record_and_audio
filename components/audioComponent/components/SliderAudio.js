import React from 'react'
import { Slider, Dimensions } from 'react-native'

const SliderAudio = () => {
    const { width } = Dimensions.get('window')
    return (
        <Slider style={{ width: width }}/>
    )
}

export default SliderAudio