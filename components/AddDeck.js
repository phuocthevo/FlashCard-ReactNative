import React, { Component } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
import { addDeck } from '../actions/index'
import { saveDeck } from '../utils/api'
import { purple, white,red } from '../utils/colors'


function SubmitBtn ({ onPress }) {
	return (
		<TouchableOpacity
			style={styles.SubmitBtn}
			onPress={onPress}>
				<Text style={styles.text}>Add New Deck</Text>
		</TouchableOpacity>
	)
}

export class AddDeck extends Component {
	state = {
		title: ''
	}

	submit = () => {
		const { title } = this.state
		tempDeck = {title,questions:[]}
		this.props.dispatch(addDeck(tempDeck))
		saveDeck(title,tempDeck)
		this.props.navigation.navigate('Deck', {title})
	}

	render(){
		const { title } = this.state
		return(
			<KeyboardAvoidingView style={{flex:1,justifyContent:'center',alignItems:'center', margin:25}} behavior='padding'>
				<Ionicons name='md-bookmarks' size={150} color={red} />
				<TextInput
						placeholder='Please Enter Deck Title Here'
						style={{fontSize: 30,margin:15}} value={title}
						onChangeText={(title) => this.setState({title})}
					/>
				<SubmitBtn onPress={this.submit} />
			</KeyboardAvoidingView>)
	}
}

const styles = StyleSheet.create({
	SubmitBtn: {
		backgroundColor: purple,
		paddingLeft: 30,
		paddingRight: 30,
		height: 45,
		borderRadius: 5,
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		color: white,
		fontSize: 20,
	}
})

export default connect()(AddDeck)
