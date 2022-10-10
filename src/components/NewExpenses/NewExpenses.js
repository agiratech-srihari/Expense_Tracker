import React,{ useState } from 'react';
import './NewExpenses.css';
import ExpenseForm from './ExpenseForm';

function NewExpenses(props) {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id : Math.random().toString()
    }
    props.onAddExpense(expenseData);
    setShow(false);
  }

  const [show,setShow] = useState(false);

  const clickHandlershow =() => {
    setShow(true);
  }
  const onclickStophandler = () => {
    setShow(false)

  }
  return (
    <div className='new-expense'>
       { show === false && <button onClick={clickHandlershow}>Add New Expense</button>}
        
        {show === true && <ExpenseForm  onSaveExpenseData={saveExpenseDataHandler} onCancel={onclickStophandler}/>}
    </div>
  )
}

export default NewExpenses