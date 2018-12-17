export const ADD_NEW_APPLICATION = 'ADD_NEW_APPLICATION';

export function addNewApplication(appId, client, amount, status) {
    return {
        type: ADD_NEW_APPLICATION,
        payload: { 
            appId: appId
        }
    }
};