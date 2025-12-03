import React from 'react'
import { store } from '../redux/store'
import { useDispatch, useSelector } from 'react-redux'
import { buyCake } from '../redux/cake/actionCreator'
import { buyCurd } from '../redux/curd/actionCreator'

function G() {
  //  var state = store.getState()
 let noOfCakes = useSelector((state) => {
    return state.cake.noOfCakes
  })
 let noOfCurds = useSelector((state) => {
    return state.curd.noOfCurds
  })

  let dispatch = useDispatch()
  
  return (
    <div>
      <h3>G: no of cakes: {noOfCakes}</h3>
      <button onClick={()=>dispatch(buyCake())}>buy cake</button>
      <h3>G: no of curds: {noOfCurds}</h3>
      <button onClick={()=>dispatch(buyCurd())}>buy curd</button>
    </div>
  )
}

export default G