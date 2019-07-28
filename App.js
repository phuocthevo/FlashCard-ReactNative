import React from 'react'
import { StyleSheet, Text, View,StatusBar } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers'
import { createAppContainer, createMaterialTopTabNavigator, createStackNavigator } from 'react-navigation'
import { setLocalNotification } from './utils/helpers'
import {purple,white} from './utils/colors'
import { Constants } from 'expo'
import Decks from './components/Decks'
import Deck from './components/Deck'
import AddCard from './components/AddCard'
import AddDeck from './components/AddDeck'
import Quiz from './components/Quiz'

CardStatusBar = ({ backgroundColor, ...props }) => {
    return (
        <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
            <StatusBar translucent backgroundColor={backgroundColor} {...props} />
        </View>
    )
}

const Tabs = createMaterialTopTabNavigator({
  Decks: {
    screen: Decks,
    navigationOptions: {
      tabBarLabel: 'Decks',
    },
  },
  AddDeck: {
    screen: AddDeck,
    navigationOptions: {
      tabBarLabel: 'Add Deck',
    },
  },
}, {
  navigationOptions: {
    header: null
  },
  tabBarOptions: {
    activeTintColor:  white,
    style: {
      height: 56,
      backgroundColor: purple,
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    }
  }
})


const MainNavigator = createStackNavigator({
  Home: {
    screen: Tabs,
	},
	Deck: {
		screen: Deck,
    navigationOptions: ({navigation}) => ({
      title: `Deck: ${navigation.state.params.title}`,
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple,
      }
    })
	},
	AddCard: {
		screen: AddCard,
    navigationOptions: ({navigation}) => ({
      title: `Deck: ${navigation.state.params.title}`,
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple,
      }
    })
	},
	StartQuiz: {
		screen: Quiz,
    navigationOptions: ({navigation}) => ({
      title: `Quiz: ${navigation.state.params.title}`,
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple,
      }
    })
	},
}, {
	initialRouteName: 'Home',
	headerMode: 'screen',
})

const AppContainer = createAppContainer(MainNavigator)

export default class App extends React.Component {
	componentDidMount() {
		setLocalNotification()
	}
  render() {
    return (
			<Provider store={createStore(reducer)}>
        <View style={{ flex: 1 }}>
          <CardStatusBar backgroundColor={purple} barStyle="light-content" />
          <AppContainer />
        </View>
			</Provider>
    )
  }
}
