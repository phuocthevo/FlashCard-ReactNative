import { ADD_CARD, ADD_DECK, RECEIVE_DECKS } from '../actions'

export default function decks(state={}, action){
    switch (action.type) {
        case RECEIVE_DECKS:
            return {
                ...state,
                ...action.decks
            }
        case ADD_CARD:
            const {question,answer} = action
            return {
                ...state,
                [action.title]: {title:action.title,
                    questions: state[action.title].questions.concat({question,answer})}
            }
        case ADD_DECK:
            return {
                ...state,
                [action.deck.title]: action.deck
                }
        default:
            return state
    }
}
