import { createStore, combineReducers } from 'redux';
import initialState from './initialState';
import listsReducer from './listsRedux';
import columnsReducer from './columnsRedux';
import cardsReducer from './cardsRedux';
import searchStringReducer from './searchStringRedux';


//selectors
//export const getFilteredCards = ({ cards, searchString }, columnId) => cards
//  .filter(card => card.columnId === columnId && strContains(card.title, searchString));

//export const getAllColumns = ({ columns }) => columns;

//export const getListById = ({ lists }, listId) => lists.find(list => list.id === listId);

//export const getColumnsByList = ({ columns }, listId) => columns
  //.filter((column) => column.listId === listId);

//export const getAllLists = ({ lists }) => lists;

//export const getFliteredFavoriteCards = ({ cards }) => {
  //return(cards.fliter((card) => card.isFavorite === true))
//};

// action creators
//export const addColumn = payload => ({ type: 'ADD_COLUMN', payload });
//export const addCard = payload => ({ type: 'ADD_CARD', payload });
//export const updateSearch = payload => ({ type: 'UPDATE_SEARCHSTRING', payload });
//export const addList = payload => ({ type: 'ADD_LIST', payload });
//export const toggleCard = payload =>({ type: 'TOGGLE_CARD_FAVORITE', payload });

  //const reducer = (state, action) => {
 /*  switch(action.type) {
    case 'ADD_COLUMN':
      return { ...state, columns: [...state.columns, {...action.payload, id: shortid() }]};

      case 'ADD_CARD':
        return { ...state, cards: [...state.cards, {...action.payload, id: shortid() }]};

      case 'UPDATE_SEARCHSTRING':
        return { ...state, searchString: action.payload };

      case 'ADD_LIST':
        return {...state, lists: [...state.lists, {...action.payload, id: shortid()}]};

      case 'TOGGLE_CARD_FAVORITE':
        return { ...state, cards: state.cards.map(card => (card.id === action.payload) ? { ...card, isFavorite: !card.isFavorite } : card) };

      default:
        return state;
  }*/

const subreducers = {
  lists: listsReducer,
  columns: columnsReducer,
  cards: cardsReducer,
  searchString: searchStringReducer
}

 const reducer = combineReducers(subreducers);


const store = createStore (
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;