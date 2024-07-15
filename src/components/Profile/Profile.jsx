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
