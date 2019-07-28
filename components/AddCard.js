import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { addCard } from '../actions'
import { saveCard } from '../utils/api'
import { purple, white } from '../utils/colors'

function SubmitBtn ({ onPress }) {
	return (
		<TouchableOpacity
			style={styles.SubmitBtn}
			onPress={onPress}>
				<Text style={styles.text}>Create Deck</Text>
		</TouchableOpacity>
	)
}

export class AddCard extends Component {
	state = {
		question: '',
		answer: '',
	}

	submit = () => {
		const { question, answer } = this.state
		const title = this.props.navigation.getParam('title')
		this.props.dispatch(addCard(title,question,answer))
		saveCard(title, question, answer)
		this.props.navigation.goBack()
	}

	render(){
		const { question, answer } = this.state
		return (
			<View style={{flex: 1,justifyContent: 'flex-start',margin: 25	}}>
				<TextInput
						placeholder='Enter Your Question Here' value={question}
						style={{margin:25, fontSize: 25, height: 50}} autoFocus ={true}
						onChangeText={(question) => this.setState({question})}
					/>
				<TextInput
						placeholder='Enter Your Answer Here' value={answer}
						style={{margin:25, fontSize: 25, height: 50}}
						onChangeText={(answer) => this.setState({answer})}
					/>
				<SubmitBtn onPress={this.submit} />
		  </View>)
	}
}

const styles = StyleSheet.create({
	SubmitBtn: {
		backgroundColor: purple,
		padding: 10,
		paddingLeft: 30,
		paddingRight: 30,
		height: 45,
		borderRadius: 2,
		alignSelf: 'flex-end',
		justifyContent: 'center',
		alignItems: 'center',
	},
  text: {
    color: white,
    fontSize: 22,
    textAlign: 'center',
  }
})

export default connect()(AddCard)
