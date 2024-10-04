import styled from 'styled-components';

export const StyledFriendList = styled.ul`
  display: block;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  width: 350px;
  list-style: none;
  padding: 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1);
  background: linear-gradient(to right, #a1c4fd, #c2e9fb);
`;

export const StyledFriendListItem = styled.li`
  display: flex;
  align-items: center;
  padding-left: 10px;
  outline: 1px solid rgb(245, 245, 245);
`;

export const StyledOnlineIndicator = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: red;
  margin-right: 15px;
`;

export const StyledAvatar = styled.img`
  border: 1px solid white;
  border-radius: 25%;
  background: linear-gradient(to right, #9abdfd, #b8e4fb);
`;

export const StyledFriendName = styled.p`
  color: rgb(47, 79, 79);
  font-size: 20px;
  font-weight: 500;
  margin-left: 15px;
`;
