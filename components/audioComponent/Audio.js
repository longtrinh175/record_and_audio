import React , { Component } from 'react'
import { View, } from 'react-native'

import PlayPauseButton from './components/PlayPauseButton'
import StopButton from './components/StopButton'
import SliderAudio from './components/SliderAudio'
import TimeStamp from './components/TimeStamp'

const Audio = () => {
    return (
        <View style={{ backgroundColor: '#FFFF99' }}>
            <View style={{ alignItems: 'center'}}>
                <TimeStamp />
            </View>
            <SliderAudio />
            <View />
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                <View style={{ width: 20, height: 20 }}/>
                <PlayPauseButton />
                <StopButton />
            </View>
        </View>
    )
}

export default Audio