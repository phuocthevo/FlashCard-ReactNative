import React from 'react'
import { Ionicons,FontAwesome } from '@expo/vector-icons'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { purple, white,red } from '../utils/colors'
import { withNavigation } from 'react-navigation'

function SubmitBtn ({ onPress,text }) {
	return (
		<TouchableOpacity
			style={styles.SubmitBtn}
			onPress={onPress}>
				<Text style={styles.text}>{text}</Text>
		</TouchableOpacity>
	)
}

export default function Result(props){
    const { correct, reset, questions, navigation } = props
    const grade = Math.round((correct/questions.length)*100)
    return(
      <View style={{flex: 1, padding: 20,justifyContent: 'space-around'}}>
        <View style={{flex:2,justifyContent: 'space-around',alignItems: 'center'}}>
            {grade < 50? <Ionicons name='md-sad' size={150} color={red} />:
                       <FontAwesome name='smile-o' size={150} color={red} />}
            <Text style={{fontSize: 30,textAlign: 'center',fontWeight: 'bold'}}>You get {grade}%</Text>
        </View>
        <View>
          <SubmitBtn onPress={reset} text={'Restart Quiz'} />
          <SubmitBtn onPress={() => navigation.goBack()} text={'Finish Quiz'} />
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
	SubmitBtn: {
		backgroundColor: purple,
    margin: 10,
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
		textAlign: 'center',
	}
})
