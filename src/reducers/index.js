// REDUCER IS WHERE WE CHANGE THE STATE
import { combineReducers } from 'redux';

import { 
    ADD_NEW_APPLICATION, 
    DELETE_APPLICATION,
    APPROVE_APPLICATION
 } from './../actions/index';

let initialState = {
    version: 1.0,
    applications: [{
        appId: 192,
        client: 'Nationwide',
        status: 'Approved',
        amount: 500
    },
    {
        appId: 193,
        client: 'Citi Bank PLC',
        status: 'Pending',
        amount: 18000
    },
    {
        appId: 194,
        client: 'Natwest PLC',
        status: 'Approved',
        amount: 27500
    },
    {
        appId: 195,
        client: 'Deutsche Bank',
        status: 'Pending',
        amount: 27500
    },
    {
        appId: 196,
        client: 'Halifax',
        status: 'Approved',
        amount: 3670
    },
    {
        appId: 197,
        client: 'Deutsche Bank',
        status: 'Pending',
        amount: 13000
    },
    {
        appId: 198,
        client: 'JP Morgan',
        status: 'Approved',
        amount: 5631
    },
    {
        appId: 199,
        client: 'RBS',
        status: 'Denied',
        amount: 187000
    }]
};

function rootReducer(state = initialState, action) {
    switch(action.type) {
        case ADD_NEW_APPLICATION:
            return {
                ...state,
                applications: state.applications.concat(action.payload)
            }
        case DELETE_APPLICATION:
            return {
                ...state,
                applications: state.applications.filter((item) => item.appId !== action.payload)
            }
        case APPROVE_APPLICATION:
            // find the item in question
            let loanInQuestion = state.applications.filter((item) => item.appId === action.payload)
            
            // amend the property i want
            loanInQuestion[0].status = action.newStatus;
            // remove item in q then concat new item in
            return {
                ...state,
                applications: state.applications.filter((item) => item.appId !== action.payload).concat(loanInQuestion[0])
            }
        default:
            return state;
    }
}

const reducer = combineReducers({
    store: rootReducer
});

export default reducer;