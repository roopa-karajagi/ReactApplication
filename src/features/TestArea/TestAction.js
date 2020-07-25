import { INCREMENT_COUNTER,DECREMENT_COUNTER } from "./TestConstants";

//From actionCreators we can pass/dipatch action to reducer then to store
export const incrementCounter=()=>{

    return {
        type:INCREMENT_COUNTER
    }
}
export const decrementCounter=()=>{

    return {
        type:DECREMENT_COUNTER
    }
}
