import { AsyncStorage } from 'react-native'
import { formatDecksResults, DECKS_KEY } from './_data'

export function fetchDecks () {
    return AsyncStorage.getItem(DECKS_KEY)
    .then(formatDecksResults)
}

export function saveDeck(key, deck) {
    return AsyncStorage.mergeItem(DECKS_KEY, JSON.stringify({
        [key]: deck
    }))
}

export function saveCard(title, question, answer) {
    return AsyncStorage.getItem(DECKS_KEY).then((result) => {
        const decks = JSON.parse(result)
        decks[title].questions.push({question, answer})
        AsyncStorage.mergeItem(DECKS_KEY, JSON.stringify(decks))
    })
}
