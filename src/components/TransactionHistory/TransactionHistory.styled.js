import styled from 'styled-components';

export const StyledTransactionTable = styled.table`
  width: 350px;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1);
`;

export const StyledTableHdRow = styled.tr`
  text-align: center;
  background: linear-gradient(to right, #a1c4fd, #c2e9fb);
  color: rgb(47, 79, 79);
  font-size: 18px;
`;

export const StyledTableRow = styled.tr`
  text-align: center;

  &:nth-child(even) {
    background: linear-gradient(to right, #a1c4fd, #c2e9fb);
  }
`;
