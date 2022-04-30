
import { addCount } from '../Redux/action'
import { useDispatch, useSelector } from 'react-redux'

export const Counter = ()=>{
  const dispatch = useDispatch();
  const counter = useSelector((store)=>store.counter)
  // const state = store.getState()
  // console.log(state)
return (
    <div>
         <h1>Counter:{counter}</h1>
      <button onClick={()=>(
        dispatch(addCount(1))
      )}>Add 1</button>
    </div>
)
}