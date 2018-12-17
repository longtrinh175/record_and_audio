import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import Record from './components/recordComponent'
import Audio from './components/audioComponent'

export default class App extends React.Component {
	render() {
		return (
			<View style={{ flex: 1, flexDirection: 'column', justifyContent: "center", alignItems: "center" }}>
				<Record />
				<Audio />
			</View>
		);
	}
}
