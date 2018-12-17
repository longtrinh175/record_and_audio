import React from 'react';
import { Text, View } from 'react-native';

import Record from './components/recordComponent'
import Audio from './components/audioComponent'

export default class App extends React.Component {
	render() {
		return (
			<View>
				<Record />
				<Audio />
			</View>
		);
	}
}
