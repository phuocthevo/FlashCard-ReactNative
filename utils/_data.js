import { AsyncStorage } from 'react-native'

export const DECKS_KEY = 'FlashCard'

function setDummyData() {
    const decks = {
        Example: {
            title: 'Example',
            questions: [
                {
                    question: 'Question 1',
                    answer: 'Ans 1'
                },
                {
                    question: 'Question 2',
                    answer: 'Ans 2'
                },
            ]
        }
    }
    AsyncStorage.setItem(DECKS_KEY, JSON.stringify(decks))
    return decks
}

export function formatDecksResults(results) {
    return results === null ? setDummyData() : JSON.parse(results)
}
