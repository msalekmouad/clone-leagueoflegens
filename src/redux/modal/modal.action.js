export const setModalStatus = status => ({
    type: 'CHANGE_STATUS',
    payload: status
}); 

export const setModalMessage = infos => ({
    type: 'SET_INFOS',
    payload: infos
})