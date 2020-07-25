export const createReducer=(initialState,fnMap)=>{
    return (state=initialState,{type,payload})=>{
        //object notation
        const handler=fnMap[type];
        return handler?handler(state,payload):state
    }
}