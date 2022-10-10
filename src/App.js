import React , { useState }from "react";
import Expense from "./components/Expenses/Expense";
import NewExpenses from "./components/NewExpenses/NewExpenses";
const dummyData = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2022, 7, 14),
  },
  { id: 'e2', 
  title: 'New TV', 
  amount: 799.49, 
  date: new Date(2022, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2022, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2022, 5, 12),
  },
];

const App = () => {
  const [expenses,setExpense] = useState(dummyData)
  

  const addExpenseHandler = (expense) => {
    // console.log('In App.js File.');
    setExpense([expense, ...expenses])
  }
  return (
    <div>
      <NewExpenses onAddExpense={addExpenseHandler}/>
      <Expense expenses={expenses}/>
    </div>
  );
}

export default App;
