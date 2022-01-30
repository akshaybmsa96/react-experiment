

const initialState = {
    value : 21
}

const reducer = (state=initialState,action)=>{

    if(action==='hello'){
        state.value = 22;
    }


    return state;

}

export default reducer;