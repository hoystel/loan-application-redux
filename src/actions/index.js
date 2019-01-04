export const ADD_NEW_APPLICATION = 'ADD_NEW_APPLICATION';

export const DELETE_APPLICATION = 'DELETE_APPLICATION';

export const AMEND_APPLICATION_STATUS = 'AMEND_APPLICATION_STATUS';

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

export function amendApplicationStatus(appId, status) {
    console.log(appId);
            console.log(status);
    return {
        type: AMEND_APPLICATION_STATUS,
        payload: appId,
        newStatus: status
    }
}