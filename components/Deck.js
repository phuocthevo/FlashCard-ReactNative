import React, { Component } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import {purple,white,red} from '../utils/colors'

function SubmitBtn ({ onPress,text }) {
	return (
		<TouchableOpacity
			style={styles.SubmitBtn}
			onPress={onPress}>
				<Text style={styles.text}>{text}</Text>
		</TouchableOpacity>
	)
}

export class Deck extends Component {
	render(){
		const { navigation, decks } = this.props
		const deck = decks[navigation.getParam('title')]
		return(
			<View style={{flex: 1, padding: 20,justifyContent: 'space-around'}}>
				<View style={{flex:2,justifyContent: 'space-around',alignItems: 'center'}}>
					<Text style={{fontSize: 40,textAlign: 'center',fontWeight: 'bold'}}>{deck.questions ? deck.questions.length: 0} Cards Total</Text>
					<Ionicons name='md-rocket' size={150} color={red} />
				</View>
				<View>
					<SubmitBtn onPress={() => navigation.navigate('AddCard', deck)} text={'Add Card'} />
					<SubmitBtn onPress={() => navigation.navigate('StartQuiz', deck)} text={'Start Quiz'} />
				</View>
			</View>)
	}
}

function mapStateToProps(decks) {
	return { decks }
}

const styles = StyleSheet.create({
	SubmitBtn: {
		margin:10,
		backgroundColor: purple,
		paddingLeft: 30,
		paddingRight: 30,
		height: 45,
		borderRadius: 2,
		justifyContent: 'center',
		alignItems: 'center',
	},
  text: {
    color: white,
    fontSize: 22,
    textAlign: 'center',
  }
})

export default connect(mapStateToProps)(Deck)
