import React, { useState } from "react";
// import ExpenseItem from "./ExpenseItem";
import "./Expense.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";

function Expense(props) {
  const [filteredYear, setFilteredYear] = useState("2022");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

   const filteredExpenses = props.expenses.filter(e => {
     return e.date.getFullYear().toString() === filteredYear})
  
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          select={filteredYear}
          onYearHandlerClicked={filterChangeHandler}
        />
        <ExpenseChart expenses={filteredExpenses}/>
        <ExpenseList expenses={filteredExpenses}/>
        
        {/* <ExpenseItem 
    title={props.expenses[0].title}
    amount={props.expenses[0].amount}
    date={props.expenses[0].date}
    ></ExpenseItem>
    <ExpenseItem 
    title={props.expenses[1].title}
    amount={props.expenses[1].amount}
    date={props.expenses[1].date}
    ></ExpenseItem>
    <ExpenseItem 
    title={props.expenses[2].title}
    amount={props.expenses[2].amount}
    date={props.expenses[2].date}
    ></ExpenseItem>
    <ExpenseItem 
    title={props.expenses[3].title}
    amount={props.expenses[3].amount}
    date={props.expenses[3].date}
    ></ExpenseItem> */}
      </Card>
    </div>
  );
}

export default Expense;
