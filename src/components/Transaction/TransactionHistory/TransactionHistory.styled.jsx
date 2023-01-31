import styled from '@emotion/styled'

export const Table = styled.table`
    width: 70%;
    margin: 0 auto;
    border-collapse: collapse;

    & td, & tr {
        height: 40px;
        text-align: center;
    }

    &>thead, &>tbody{
        border: 1px solid #000;
    }

    &>thead{
        background-color: rgb(128, 206, 109);
        font-size: 20px;
        text-transform: uppercase;
        text-align: center;
        
        
        
    }

    &>tbody>tr:nth-of-type(2n){
    background-color: rgb(211, 238, 215);
    }
    
    & th:not(:last-child), & td:not(:last-child) {
        border-right: 1px solid rgb(221, 218, 218);
    }
`