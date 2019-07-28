import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { gray, white, black, blue,purple } from '../utils/colors'

function SubmitBtn ({ onPress,text }) {
	return (
		<TouchableOpacity
			style={styles.SubmitBtn}
			onPress={onPress}>
				<Text style={styles.text}>{text}</Text>
		</TouchableOpacity>
	)
}

export default function Question(props){
    const { card, checkAns, flip, answer,remain } = props
    return(
        	<View style={{flex: 1, padding: 20,justifyContent: 'space-around'}}>
            <View style={{flex:2,justifyContent: 'space-around',alignItems: 'center'}}>
              <Text style={{fontSize: 40,textAlign: 'center'}}>{checkAns ? card.answer : card.question}</Text>
              <TouchableOpacity onPress={flip}>
                  <Text style={{fontSize: 20,textAlign: 'center', color:blue}}>{checkAns ? 'Show Question' : 'Show Answer'}</Text>
              </TouchableOpacity>
              <Text style={{fontSize: 15,textAlign: 'center', color:gray}}>Remain: {remain} questions </Text>
            </View>
            <View>
              <SubmitBtn onPress={() => answer('correct')} text={'Correct'} />
              <SubmitBtn onPress={() => answer('incorrect')} text={'Incorrect'} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
	SubmitBtn: {
		backgroundColor: purple,
    margin: 5,
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
