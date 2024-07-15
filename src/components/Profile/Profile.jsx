import {
  StyledProfile,
  StyledDescription,
  StyledAvatar,
  StyledUserName,
  StyledTag,
  StyledLocation,
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

      {/* <ul class="stats">
        <li>
          <span class="label">Followers</span>
          <span class="quantity">{stats.followers}</span>
        </li>
        <li>
          <span class="label">Views</span>
          <span class="quantity">{stats.views}</span>
        </li>
        <li>
          <span class="label">Likes</span>
          <span class="quantity">{stats.likes}</span>
        </li>
      </ul> */}
    </StyledProfile>
  );
};
