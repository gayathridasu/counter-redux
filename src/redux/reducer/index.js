

var initialstate = {
    count:0
}

function reducer(state=initialstate,action){

    switch(action.type){
        case "increment":
            return{
                ...state,count:state.count+1
            }
        case "decrement":
            return{
                ...state,count:state.count-1
            }
        default:
            return state
    }
}
export default reducer;