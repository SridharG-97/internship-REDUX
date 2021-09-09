const initialSate = {
    about : "",
}

const homeReducer = (state=initialSate,action) =>{
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