import {
  StyledProfile,
  StyledDescription,
  StyledAvatar,
  StyledUserName,
  StyledTag,
  StyledLocation,
  StyledStatsList,
  StyledStatsItem,
  StyledLabel,
  StyledQuantityLine,
} from './Profile.styled';
import PropTypes from 'prop-types';

export const Profile = ({
  user: { username, tag, location, avatar, stats },
}) => {
  return (
    <StyledProfile>
      <StyledDescription>
        <StyledAvatar src={avatar} alt="User avatar" />
        <StyledUserName>{username}</StyledUserName>
        <StyledTag>@{tag}</StyledTag>
        <StyledLocation>{location}</StyledLocation>
      </StyledDescription>
      <StyledStatsList>
        <StyledStatsItem>
          <StyledLabel>Followers</StyledLabel>
          <StyledQuantityLine>{stats.followers}</StyledQuantityLine>
        </StyledStatsItem>
        <StyledStatsItem>
          <StyledLabel>Views</StyledLabel>
          <StyledQuantityLine>{stats.views}</StyledQuantityLine>
        </StyledStatsItem>
        <StyledStatsItem>
          <StyledLabel>Likes</StyledLabel>
          <StyledQuantityLine>{stats.likes}</StyledQuantityLine>
        </StyledStatsItem>
      </StyledStatsList>
    </StyledProfile>
  );
};

Profile.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};
