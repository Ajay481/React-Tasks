import "./Expenses/ExpenseItem";
import Card from "./UI/Card";
import ExpenseItem from "./Expenses/ExpenseItem";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: "Rs 4600",
      date: new Date(2022, 7, 16),
    },
    {
      id: "e2",
      title: "Food",
      amount: "Rs 2500",
      date: new Date(2022, 2, 28),
    },
    {
      id: "e3",
      title: "Movies",
      amount: "Rs 1500",
      date: new Date(2022, 8, 25),
    },
    {
      id: "e4",
      title: "Petrol",
      amount: "Rs 600",
      date: new Date(2022, 5, 11),
    },
  ];
  return (
    // <div>
    //   <div>
    //     {expenses.map((item) => {
    //       return (
    //         <div>
    //           <ExpenseItem
    //             title={item.title}
    //             amount={item.amount}
    //             date={item.date}
    //           ></ExpenseItem>
    //         </div>
    //       );
    //     })}
    //   </div>
    // </div>
 
<Card className="expenses">
 <ExpenseItem
    title={expenses[0].title}
    amount={expenses[0].amount}
    date={expenses[0].date}
    LocationofExpenditure={expenses[0].LocationofExpenditure}
  ></ExpenseItem>
  <ExpenseItem
    title={expenses[1].title}
    amount={expenses[1].amount}
    date={expenses[1].date}
    LocationofExpenditure={expenses[1].LocationofExpenditure}
  ></ExpenseItem>
  <ExpenseItem
    title={expenses[2].title}
    amount={expenses[2].amount}
    date={expenses[2].date}
    LocationofExpenditure={expenses[2].LocationofExpenditure}
  ></ExpenseItem>
  <ExpenseItem
    title={expenses[3].title}
    amount={expenses[3].amount}
    date={expenses[3].date}
    LocationofExpenditure={expenses[3].LocationofExpenditure}
  ></ExpenseItem> 
  </Card>
  );
}

export default App;
