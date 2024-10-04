import {
  StyledTransactionTable,
  StyledTableHdRow,
  StyledTableRow,
} from './TransactionHistory.styled';
import PropTypes, { string } from 'prop-types';

export const TransactionHistory = ({ items }) => {
  return (
    <StyledTransactionTable>
      <thead>
        <StyledTableHdRow>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </StyledTableHdRow>
      </thead>

      <tbody>
        {items.map(item => (
          <StyledTableRow key={item.id}>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </StyledTableRow>
        ))}
      </tbody>
    </StyledTransactionTable>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: string.isRequired,
      currency: string.isRequired,
    })
  ).isRequired,
};
