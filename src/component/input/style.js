import styled from "styled-components";


export const InputContainer = styled.div`
    border-radius: 30px;
    background: #131925;
    padding: 2%;
    box-sizing: border-box;
    align-items: center;
    display: flex;
    input{
        border: none;
        background: unset;
        width: 85%;
        height: 40px;
        margin-right: 5px;
        color: rgb(221, 220, 221);
        &::placeholder{
            font-size: 16px;
            color: rgb(221, 220, 221);
        }
    }
`