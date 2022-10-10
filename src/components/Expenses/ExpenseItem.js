import React from 'react'
// import { useState } from 'react/cjs/react.production.min'
import Card from '../UI/Card'
import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'

function ExpenseItem(props) {


  return (
    <li>
    <Card className='expense-item'>
      <ExpenseDate date = {props.date}></ExpenseDate>
      <div className='expense-item__decsription'>
        <h2>{props.title}</h2>
      </div>
      <div className='expense-item__price'>${props.amount}</div>
      {/* <button onClick={clickHandler}>Change title</button> */}
    </Card>
    </li>
  )
}

export default ExpenseItem