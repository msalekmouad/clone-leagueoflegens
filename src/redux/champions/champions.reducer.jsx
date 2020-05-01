const INITIAL_STATE = {
    champions_list: [],
      selected_champ: ""
}

const championsReducer = (state = INITIAL_STATE, action) =>{
    switch (action.type) {
        case 'SELECT_CHAMP':
            return {
                ...state,
                selected_champ: action.payload
            }
        case 'SET_CHAMPS':
          return {
              ...state,
              champions_list: action.payload
          }
        default:
            return state;
    }   
}

export default championsReducer;
