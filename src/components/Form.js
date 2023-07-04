// import React from 'react';
// import {render}from 'react-dom';

 
import configureStore from '../store/createStore.js';
import {handlerInputChange, toggleContactForm} from '../actions';

export default function Form(){



const store = configureStore();

const unsubscribe = store.subscribe(()=>
console.log(store.getState())
)

store.dispatch(toggleContactForm());

store.dispatch(handlerInputChange('djksbf.sa,mdbfjk','654654654mjhgljgl'));


    return (
        {unsubscribe}
    )



}