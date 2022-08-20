import './App.css';
import { useReducer } from "react"

const ACTIONS={
  ADD_Num: "add_num",
  DEL_Num: "del_num",
  Equate: "equate",
  operation: "operation",
  reset: "reset"
}

function calculator(state){
  
  const Pre = parseFloat(state.PreOp);
  const Cur = parseFloat(state.CurOp);
  if( isNaN(Pre) || isNaN(Cur))
    return ""
  
  let total = 0.0;

  if(state.Oper === "+"){
    total = Pre + Cur;
  }
  
  else if(state.Oper === "-"){
    total = Pre - Cur;
  }
  
  else if(state.Oper === "*"){
    total = Pre * Cur;
  }
  
  else if(state.Oper === "÷"){
    total = Pre / Cur;
  }

  return total.toString()
}

function reducer(state, action){
  switch(action.type){
    case ACTIONS.ADD_Num:
      if(state.newnum)
      return{
        ...state,
        CurOp: action.ply,
        newnum: false
      }
      if(action.ply === "0" && state.CurOp === "0") return state
      if(action.ply === "." && state.CurOp.includes(".")) return state
      return{
        ...state,
        CurOp: `${state.CurOp || ""}${action.ply}`
      }
    
    case ACTIONS.reset:
      return {}

    case ACTIONS.operation:
      if(state.CurOp == null && state.PreOp == null)
        return state
      if(state.CurOp == null)
        return{
          ...state,
          Oper: action.ply
        }
      if(state.PreOp == null){
        return{
          ...state,
          Oper: action.ply,
          PreOp: state.CurOp,
          CurOp: null
        }
      }
      return{
        ...state,
        Oper: action.ply,
        PreOp: calculator(state),
        CurOp: null
      }

    case ACTIONS.Equate:
      if(state.CurOp == null || state.PreOp == null || state.Oper == null)
        return state
      return{
        ...state,
        newnum: true,
        CurOp: calculator(state),
        PreOp: null,
        Oper: null
      }
    
    case ACTIONS.DEL_Num:
      if(state.newnum)
      return{
        ...state,
        CurOp: null,
        PreOp: null,
        Oper: null,
        newnum: false
      }
      if(state.CurOp == null) return state
      if(state.CurOp.length === 1) return {
        ...state,
        CurOp: null
      }
      return{
        ...state,
        CurOp: state.CurOp.substring(0,state.CurOp.length - 1),
      }
  }
}

function App() {
  
  const[{CurOp,PreOp,Oper},dispatch] = useReducer(reducer,{});

  return (
    <div className='calculator-grid'>
      <div className='output'>
        <div className='previous'>{PreOp}{Oper}</div>
        <div className='current'>{CurOp}</div>
      </div>
      <div className='input'>
        <div className='first'>
          <button className='span-two' onClick={() => dispatch({type: ACTIONS.reset})}>AC</button>
          <button onClick={() => dispatch({type: ACTIONS.DEL_Num})}>DEL</button>
          <button onClick={() => dispatch({type: ACTIONS.operation, ply: '÷'})}>÷</button>
        </div>
        <div className='second'>
          <button onClick={() => dispatch({type: ACTIONS.ADD_Num, ply: '1'})}>1</button>
          <button onClick={() => dispatch({type: ACTIONS.ADD_Num, ply: '2'})}>2</button>
          <button onClick={() => dispatch({type: ACTIONS.ADD_Num, ply: '3'})}>3</button>
          <button onClick={() => dispatch({type: ACTIONS.operation, ply: '*'})}>*</button>
        </div>
        <div className='third'>
          <button onClick={() => dispatch({type: ACTIONS.ADD_Num, ply: '4'})}>4</button>
          <button onClick={() => dispatch({type: ACTIONS.ADD_Num, ply: '5'})}>5</button>
          <button onClick={() => dispatch({type: ACTIONS.ADD_Num, ply: '6'})}>6</button>
          <button onClick={() => dispatch({type: ACTIONS.operation, ply: '+'})}>+</button>
        </div>
        <div className='fourth'>
          <button onClick={() => dispatch({type: ACTIONS.ADD_Num, ply: '7'})}>7</button>
          <button onClick={() => dispatch({type: ACTIONS.ADD_Num, ply: '8'})}>8</button>
          <button onClick={() => dispatch({type: ACTIONS.ADD_Num, ply: '9'})}>9</button>
          <button onClick={() => dispatch({type: ACTIONS.operation, ply: '-'})}>-</button>
        </div>
        <div className='fifth'>
          <button onClick={() => dispatch({type: ACTIONS.ADD_Num, ply: '.'})}>.</button>
          <button onClick={() => dispatch({type: ACTIONS.ADD_Num, ply: '0'})}>0</button>
          <button className='span-two' onClick={() => dispatch({type: ACTIONS.Equate})}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
