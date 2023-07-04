import newContact from './initialState';

const  ui = {
    isContactFormHidden:true
};

export default  function uiReducer (state = ui.isContactFormHidden, action) {
    switch(action.type) {
        case "TOGGLE_CONTACT_FORM": {
            return {
                ...state,
                isContactFormHidden: !state
            }
        }
        default: return state;
    }
}