export const selectChamp = champ => ({
    type: 'SELECT_CHAMP',
    payload: champ
}); 

export const setChampions = champs => ({
    type: 'SET_CHAMPS',
    payload: champs
})