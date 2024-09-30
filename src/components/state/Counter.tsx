import React, {useReducer} from 'react'
type counterStateProps = {
    count: number
}
type ResetProps = {
    type: 'reset',
}
type counterActionsProps = {
    type: 'inc' | 'dec',
    payload: number
}
type CounterProps =  counterActionsProps | ResetProps
const counterReducer = (state:counterStateProps, action:CounterProps)=>{
    switch (action.type) {
        case 'inc':
            return {count: state.count+action.payload}
            break;
        case 'dec':
            return {count: state.count-action.payload}
        case 'reset':
            return {count: 0}
        default:
            return state
            break;
    }
}

const Counter = () => {
    const initialValue = {count:0}
    const [state, dispatch] = useReducer(counterReducer,initialValue)
    
  return (
    <div>
        <h2>Number : {state?.count}</h2>
        <button onClick={()=>dispatch({type:'inc', payload:10})}>Increment</button>
        <button onClick={()=>dispatch({type:'dec', payload: 10})}>Decrement</button>
        <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
    </div>
  )
}

export default Counter