import React , { Component } from 'react'
import { View, Text } from 'react-native'

import RecordButton from './RecordButton'
import TimeStamp from './TimeStamp'

const Record = () => (
    <View style={{ alignItems: 'center', backgroundColor: '#99FFCC' }}>
        <TimeStamp />
        <RecordButton />
    </View>
)

export default Record