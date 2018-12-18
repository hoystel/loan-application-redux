export const ADD_NEW_APPLICATION = 'ADD_NEW_APPLICATION';

export const DELETE_APPLICATION = 'DELETE_APPLICATION';

export const APPROVE_APPLICATION = 'APPROVE_APPLICATION';
export const DENY_APPLICATION = 'DENY_APPLICATION';

export function addNewApplication(appId, client, amount, status) {
    return {
        type: ADD_NEW_APPLICATION,
        payload: { 
            appId: appId,
            client: client,
            amount: amount,
            status: status
        }
    }
};

//could do this by index too but go with ID for now
export function deleteApplication(appId) {
    console.log('id for this item is ' + appId);
    return {
        type: DELETE_APPLICATION,
        payload: appId
    }
}

export function approveApplication(appId, status) {
    return {
        type: APPROVE_APPLICATION,
        payload: appId,
        newStatus: status
    }
}