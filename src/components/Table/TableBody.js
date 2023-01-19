import Transaction from '../Transaction';
const TableBody = ({ month, monthlyPoints, MonthlyPointEarnedText, index }) => {
  return (
    <tbody>
      {month.map(transaction => (
        <Transaction key={transaction.id} date={transaction.date} amount={transaction.amount} points={transaction.points} />
      ))}
      <tr> 
        <th colSpan="3">
          {MonthlyPointEarnedText} : {monthlyPoints[index]}
        </th>
      </tr>
    </tbody>
  );
}
export default TableBody;
