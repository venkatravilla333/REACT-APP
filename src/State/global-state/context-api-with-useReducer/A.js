import React, { useReducer} from 'react'
import B from './B'
import C from './C'

export let countContext = React.createContext(100)
console.log(countContext)

function A() {
  
  // let [count, setCount] = useState(0)

  let initialState = {
   count: 0
  }

  let countReducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
      case "INCREASE":
        return {
          count: state.count + 1
        }
        break;
      case "DECREASE":
        return {
          count: state.count - 1
        }
        break;
     return state
    }
    
  } 

 let [state, dispatch] = useReducer(countReducer, initialState)

  return (
    <div>
      <countContext.Provider value={{state, dispatch}}>
      <B />
      <C />
      </countContext.Provider>
    </div>
  )
}

export default A