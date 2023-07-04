import initialState from './initialState';


export default  function contactReducer (state = initialState.newContact, action) {
    switch(action.type) {
        case "ADD_CONTACT": {
            return {
                ...state,
              //  contactList: [...state.contactList, state.newContact]
            }
        }

        case "HANDLER_INPUT_CHANGE": {
            return {
                ...state,
                newContact: [...state.name]
            }
        }

        default: return state;
    }
}