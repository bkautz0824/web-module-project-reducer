import React, { useReducer} from 'react';


import { applyNumber } from '../actions';
import { changeOperation } from '../actions';
import { clearDisplay } from '../actions';
import { setCurrentMemory } from '../actions';
import { addToMemory } from '../actions';
import {clearMemory} from '../actions';

import './App.css';

import TotalDisplay from './TotalDisplay';
import CalcButton from './CalcButton';

import reducer, { initialState } from '../reducers'


function App() {

  const [state, dispatch] = useReducer(reducer, initialState)


  const handleNumberClick = (number) => {
    
    dispatch(applyNumber(number))
  }
  
  const handleOperatorChange = (operator) => {
    
    dispatch(changeOperation(operator))
  }

  const handleClear = () => {
    dispatch(clearDisplay())
  }

  const handleSetCurrentMemory = () => {
    dispatch(setCurrentMemory())
  }

  const handleAddToMemory = () => {
    console.log(operator)
    dispatch(addToMemory())
  }

  const handleClearMemory = () => {
    dispatch(clearMemory())
  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"> Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> ${state.operation}</span>
              <span id="memory"><b>Memory:</b> ${state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"} onClick={() => handleAddToMemory()}/>
              <CalcButton value={"MR"} onClick={() => handleSetCurrentMemory()}/>
              <CalcButton value={"MC"} onClick={() => handleClearMemory()}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={() => handleNumberClick(1)}/>
              <CalcButton value={2} onClick={() => handleNumberClick(2)}/>
              <CalcButton value={3} onClick={() => handleNumberClick(3)}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={() => handleNumberClick(4)}/>
              <CalcButton value={5} onClick={() => handleNumberClick(5)}/>
              <CalcButton value={6} onClick={() => handleNumberClick(6)}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={() => handleNumberClick(7)}/>
              <CalcButton value={8} onClick={() => handleNumberClick(8)}/>
              <CalcButton value={9} onClick={() => handleNumberClick(9)}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={() => handleOperatorChange("+")}/>
              <CalcButton value={"*"} onClick={() => handleOperatorChange("*")}/>
              <CalcButton value={"-"} onClick={() => handleOperatorChange("-")}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={() => handleClear()}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
