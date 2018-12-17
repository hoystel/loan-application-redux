// REDUCER IS WHERE WE CHANGE THE STATE
import { combineReducers } from 'redux';

import ADD_NEW_APPLICATION from './../actions/index';

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
                ...state
            }
        default:
            return state;
    }
}

const reducer = combineReducers({
    store: rootReducer
});

export default reducer;