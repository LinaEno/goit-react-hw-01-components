import PropTypes from 'prop-types';
import { Item, Status, Avatar, UserName } from './FriendListItem.styled';

export const FriendListItem = ({avatar, name, isOnline, id}) => {
    return (
        <Item key={ id }>
            <Status  isOnline={isOnline} >{ isOnline }</Status>
            <Avatar src={avatar} alt="User avatar" width="48" />
            <UserName>{ name }</UserName>
        </Item>
    )
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
}