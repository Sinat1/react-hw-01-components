import {
  StyledFriendList,
  StyledFriendListItem,
  StyledOnlineIndicator,
  StyledAvatar,
  StyledFriendName,
} from '../FriendList/FriendList.styled';
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
  return (
    <StyledFriendList>
      {friends.map(friend => (
        <StyledFriendListItem key={friend.id}>
          <StyledOnlineIndicator
            style={{ background: friend.isOnline ? 'green' : 'red' }}
          ></StyledOnlineIndicator>
          <StyledAvatar src={friend.avatar} alt="User avatar" width="48" />
          <StyledFriendName>{friend.name}</StyledFriendName>
        </StyledFriendListItem>
      ))}
    </StyledFriendList>
  );
};

StyledFriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
