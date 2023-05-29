import styled from "styled-components";


export const FooterWrapper = styled.div`
    margin-top: 48px;
    margin-bottom: 48px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    .product-name{
        align-items: center;
        gap: 1%;
        flex-basis: 50%;
    }
    .link-wrapper{
        display: flex;
        a{
            text-decoration: underline;
            word-break: keep-all;
            color: #DDDCDD;
            width: 100%;
        }
    }
`