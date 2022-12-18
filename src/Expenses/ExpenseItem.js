import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";

const ExpenseItem = (props) => {
  const clickHandler = (id) => {
    console.log(id);
    const element = document.getElementById(id);
    element.remove();
  };
  return (
    <Card>
      <div className="expense-item" id={props.id}>
        <ExpenseDate date={props.date} />
        <ExpenseDetails title={props.title} />
        <ExpenseDetails amount={props.amount} />
        <button onClick={() => clickHandler(props.id)}>Delete Expense</button>
      </div>
    </Card>
  );
};

export default ExpenseItem;
