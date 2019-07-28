import React, { Component } from 'react'
import { View, Text, StyleSheet} from 'react-native'
import { connect } from 'react-redux'
import Result from './Result'
import Question from './Question'
import {black} from '../utils/colors'

class Quiz extends Component {
	state = {
		checkAns: false,
		curr:0,
		correct: 0
	}
	handleAnswer = (result) => {
		this.setState((state) => ({
				curr : state.curr + 1, checkAns: false,
				correct : result === 'correct' ? state.correct + 1 : state.correct,
		}))
	}

	render(){
		const { curr, checkAns, correct } = this.state
		const questions = this.props.navigation.getParam('questions', [])
		return(
				<View style={{flex:1,justifyContent:'center',alignItems:'center', margin:25}}>
						{curr === questions.length ?
							<Result questions={questions}
									reset={() => this.setState({ checkAns: false, curr:0, correct: 0})}
									correct={correct} navigation={this.props.navigation}/>:
							<Question  card={questions[curr]} checkAns={checkAns} answer={this.handleAnswer} remain={questions.length-curr}
									flip={() => {this.setState((prev) => ({checkAns: !prev.checkAns}))}}/>}
				</View>
		)
	}
}

export default connect()(Quiz)
