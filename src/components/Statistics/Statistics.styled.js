import styled from 'styled-components';

export const StyledStatistics = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  width: 350px;
  color: rgb(47, 79, 79);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1);
  background: linear-gradient(to right, #a1c4fd, #c2e9fb);
`;

export const StyledList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
`;

export const StyledListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 65px;
  height: 65px;
  outline: 1px solid rgb(245, 245, 245);
`;

export const StyledLabel = styled.span`
  font-size: 16px;
  font-weight: 500;
  padding-bottom: 5px;
`;

export const StyledPercentage = styled.span`
  font-size: 20px;
  font-weight: 700;
`;
