import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";
import Expenseschart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses= props.items.filter((expense)=>{
    return expense.date.getFullYear().toString()===filteredYear
  }); 

  

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <Expenseschart expenses={filteredExpenses} />
       <ExpensesList items={filteredExpenses} />

        
      </Card>
    </div>
  );
};

export default Expenses;

// {expenses.map((expense) => {
//   return (
//     <ExpenseItem
//       date={expense.date}
//       title={expense.title}
//       amount={expense.amount}
//     ></ExpenseItem>
//   );
// })
// }
