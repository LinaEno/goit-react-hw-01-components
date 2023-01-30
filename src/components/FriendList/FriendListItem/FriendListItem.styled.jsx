import styled from '@emotion/styled'

export const Item = styled.li`
    display: flex;
    align-items: center;
    justify-content: left;
    border: 1px solid rgb(218, 241, 115);
    width: 300px;
    margin-bottom: 15px;
    padding: 15px 30px;
`

export const Status = styled.span`
    width: 50px;
    border-radius: 50%;
    height: 50px;
    margin-right: 15px;

    background-color:${({ isOnline }) => {
    switch (isOnline) {
        case true:
            return "green";
        case false:
            return "red";
        default:
            return "black";
        }
    }}
`

export const Avatar = styled.img`
    width: 100px;
    margin-right: 15px;
    
`

export const UserName = styled.p`
    font-size: 24px;
    font-weight: 700;
`