import React, { useReducer } from 'react'

function G() {
  let intilaState = {
  noOfCakes: 100
}
  let cakeReducer = (state = intilaState, action) => {
    console.log(action)
    switch (action.type) {
      case "BUY_CAKE":
        return {
          noOfCakes: state.noOfCakes - 1
        }
        break;
      // default:
      //   return state
    }
    
  } 
  let [state, dispatch] = useReducer(cakeReducer, intilaState)
  
  return (
    <div>
      <h3>G: {state.noOfCakes}</h3>
      <button onClick={()=>dispatch({type: "BUY_CAKE"})}>buycake</button>
    </div>
  )
}

export default G