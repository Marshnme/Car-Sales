

export const ADD_FEATURE = "ADD_FEATURE";

export const addFeature = (id) =>dispatch => {
    console.log("id", id)
    dispatch({type: ADD_FEATURE,
    payload: id})
    
};




// export const REMOVE_FEATURE = "REMOVE_FEATURE"

// export const removeFeature = () => {
//     type: REMOVE_FEATURE
// };