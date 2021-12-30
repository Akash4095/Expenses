import React from "react";

import "./ExpenseForm.css";

const ExpenseForm = () => {

    
    function title(event){
        console.log(event.target.value);
    }
    function amount(event){
        console.log(event.target.value);
    }
    function date(event){
        console.log(event.target.value);
    }
   
  return (
    <form action="">
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input id="title" type="text" onChange={title} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input id="amount" type="number" min="0.01" step="0.01" onChange={amount} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input id="date" type="date" min="2019-01-01" max="2022-01-01" onChange={date} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
