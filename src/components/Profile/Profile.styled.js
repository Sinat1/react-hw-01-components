import styled from 'styled-components';

export const StyledProfile = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  width: 350px;
`;

export const StyledDescription = styled.div`
  background: linear-gradient(to right, #a1c4fd, #c2e9fb);

  padding-top: 30px;
  padding-bottom: 30px;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1);
`;

export const StyledAvatar = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 150px;
  height: 150px;
  outline: 3px solid green;
  border-radius: 50%;
  background-color: rgb(245, 245, 245);
`;

export const StyledUserName = styled.p`
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  margin: 15px 0 15px 0;
`;

export const StyledTag = styled.p`
  font-size: 18px;
  text-align: center;
  color: rgb(47, 79, 79);
  margin: 0 0 15px 0;
`;

export const StyledLocation = styled.p`
  font-size: 18px;
  text-align: center;
  color: rgb(47, 79, 79);
  margin: 0;
`;
