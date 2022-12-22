import React, { useState } from "react";
import Expenses from "./Expenses/Expenses";
import NewExpense from "./Expenses/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 799.25,
    date: new Date(2022, 7, 16),
  },
  {
    id: "e2",
    title: "Food",
    amount: 294.5,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e3",
    title: "Movies",
    amount: 94.25,
    date: new Date(2021, 8, 25),
  },
  {
    id: "e4",
    title: "Petrol",
    amount: 125,
    date: new Date(2020, 5, 11),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
