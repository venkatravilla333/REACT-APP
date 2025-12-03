import { BUYCURD } from "./actionTypes"

let initialState = {
  noOfCurds: 200
}

export let curdReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUYCURD:
      return {
        noOfCurds: state.noOfCurds - 1
      }
      break;
    default:
      return state
  }
}