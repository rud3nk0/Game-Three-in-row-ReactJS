export const addContact = ()=>{
    return{
        type:"ADD_CONTACT",
    }
}

export const handlerInputChange = (name, phone)=>{
    return{
        type:"HANDLER_INPUT_CHANGE",
        payload:{name:phone}
    }
}



export const toggleContactForm = ()=>{
    return{
        type:"TOGGLE_CONTACT_FORM",
    }
}