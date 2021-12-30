import React, {useState} from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';


const ExpenseItem = (props) => {
  const [amount, addAmount]= useState(props.amount)
  
  const addExpense = () =>{
    addAmount(amount+100);
    
  }
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${amount}</div>
        <button className='expense-item__delete' onClick={addExpense}>Add Expense</button>
      </div>
    </Card>
  );
}

export default ExpenseItem