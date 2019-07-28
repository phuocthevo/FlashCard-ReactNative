import React, { Component } from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { AppLoading } from 'expo'
import { connect } from 'react-redux'
import { white } from '../utils/colors'
import { fetchDecks } from '../utils/api'
import { receiveDecks } from '../actions/index'

export class Decks extends Component {
	state = {
		loading: true,
	}

	componentDidMount(){
			fetchDecks()
				.then(decks => this.props.dispatch(receiveDecks(decks)))
        .then(() => this.setState(() => ({loading: false})))
	}

	render(){
		return this.state.loading? <AppLoading /> : (
       <View>
				<FlatList
				data={Object.values(this.props.decks)}
        keyExtractor={(item) => item.title}
				renderItem={({item}) => (
					<TouchableOpacity style={styles.container}
						onPress={() => this.props.navigation.navigate('Deck', item)}>
						<Text style={{margin: 5,fontSize: 25,fontWeight: 'bold'}}>{item.title}</Text>
						<Text>Number of card: {item.questions ? item.questions.length : 0}</Text>
					</TouchableOpacity>)}
				/>
			</View>)
	}
}

function mapStateToProps(decks) {
		return { decks }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: white,
    margin: 15,
		height: 180,
    elevation: 10,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default connect(mapStateToProps)(Decks)
