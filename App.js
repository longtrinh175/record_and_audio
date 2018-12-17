import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import Record from './components/recordComponent'
import Audio from './components/audioComponent'

export default class App extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<Record />
				<View style={{ marginBottom: 10, marginTop: 10, }} />
				<Audio />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		marginTop: 24,
		backgroundColor: "#EEEEEE"
	}
})
