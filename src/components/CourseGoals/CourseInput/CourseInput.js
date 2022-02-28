import React, { useState, useRef } from 'react';

import Button from '../../UI/Button';
import './CourseInput.css';

const CourseInput = props => {

const inputRef = useRef();
const [valid, setInvalid] = useState(true);

//Code for reset css if user being type their goal. GoalInpuChangeHandler is being called by onChange event
  const goalInputChangeHandler = event => {
    event.preventDefault();
    if( inputRef.current.value.trim().length>0){
      setInvalid(true);
    }
   
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    const enteredValue =  inputRef.current.value;

    if(enteredValue.trim().length===0){
      setInvalid(false)
      return;
    }
    
    props.onAddGoal(enteredValue);
    inputRef.current.value=''; //you can not set without using value attribute
  };

  return (
     <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label style={{color: !valid ? 'red' :'black'}}>Course Goal</label>
        <small className={`error msg ${!valid ? 'error_alert_msg':''}`}>Please enter some value</small>
     
        <input type="text" style={{background: !valid? 'pink' :""}} onChange={goalInputChangeHandler} 
        ref={inputRef}/>
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
