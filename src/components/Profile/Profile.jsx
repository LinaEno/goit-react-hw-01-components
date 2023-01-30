import PropTypes from 'prop-types';
import { ContainerUser,  ContainerImage, Image, UserName, Tag, Location, StatsList, Label, Quantity} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, followers, views, likes}) => {
    return (
      <ContainerUser key={username}>
        <ContainerImage>
                <Image
            src={avatar}
            alt="User avatar"
    />
          <UserName>{username}</UserName>
          <Tag>@{tag}</Tag>
          <Location>{location}</Location>
  </ContainerImage>

  <StatsList>
    <li>
            <Label>Followers</Label>
            <Quantity>{followers}</Quantity>
    </li>
    <li>
            <Label>Views</Label>
            <Quantity>{views}</Quantity>
    </li>
    <li>
            <Label>Likes</Label>
            <Quantity>{likes}</Quantity>
    </li>
  </StatsList>
</ContainerUser>
    )
}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
}