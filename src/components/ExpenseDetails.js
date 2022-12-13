import "./ExpenseItem.css";

function ExpenseDetails(props) {
  const title = props.title;
  const amount = props.amount;
  const LocationofExpenditure = props.LocationofExpenditure;

  return (
    <div className="expense-item__description">
      <h2>{title}</h2>
      <div className="expense-item__price">{amount}</div>
      <div className="expense-item h2">{LocationofExpenditure}</div>
    </div>
  );
}

export default ExpenseDetails;
