import { BUYCAKE } from "./actonsTypes";


let initialState = {
  noOfCakes : 100
}

export let cakeReducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case BUYCAKE:
      return {
        noOfCakes: state.noOfCakes - 1
      }
      break;
    default: 
      return state
  }
}
