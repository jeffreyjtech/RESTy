
const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'ADD':
      return { ...state, characters: [...state.characters, payload] };
    case 'REMOVE':
      return { ...state, characters: state.characters.filter(character => character !== payload) }
    default:
      return state;
  }
}

export default reducer;
