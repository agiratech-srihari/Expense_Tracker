import React, { useState } from "react";
import "./ExpenseForm.css";
function ExpenseForm(props) {
  // const [userInput,setUserInput] = useState({
  //     enteredTitle:'',
  //     enteredAmount:'',
  //     enteredDate:''
  // });

  const [enteredTitle, setEnteredTitle] = useState("");
  const titleHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     enteredTitle:event.target.value
    // })
  };
  const [enteredAmount, setEnteredAmount] = useState("");
  const amountHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     enteredAmount:event.target.value
    //     })
  };
  const [enteredDate, setEnteredDate] = useState("");
  const dateHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     enteredDate:event.target.value
    // })
  };
  const submitHandler = (event) =>{
      event.preventDefault();  
      const expenseData = {
          title : enteredTitle,
          amount : +enteredAmount,
          date : new Date(enteredDate)
      }
      props.onSaveExpenseData(expenseData);
      setEnteredTitle('');
      setEnteredAmount('');
      setEnteredDate('');
    
    };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2021-01-01"
            max="2024-12-31"
            value={enteredDate}
            onChange={dateHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={props.onCancel} >Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
