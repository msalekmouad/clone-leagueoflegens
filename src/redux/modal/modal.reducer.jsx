const INITIAL_STATE = {
    show: false,
    infos: {
        title:"modal title",
        message: "lorem ipsum doren ipsum"
    }
}

const modalReducer = (state = INITIAL_STATE, action) =>{
    switch (action.type) {
        case 'CHANGE_STATUS':
            return {
                ...state,
                show: action.payload
            }
        case 'SET_INFOS':
          return {
              ...state,
              infos: action.payload
          }
        default:
            return state;
    }   
}

export default modalReducer;
