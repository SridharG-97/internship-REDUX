const initialState = {
    about : "",
}

const homeReducer = (state=initialState,action) =>{
    switch (action.type) {
        case "ADD_ABOUT":
            return{
                about:action.data
            }
                
        default :

        return state;
            
    }
}

export default homeReducer;