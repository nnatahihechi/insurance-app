import styled from "styled-components";
export const ServicesContainer = styled.div`
backgroundColor: white;
display: flex;
margin-top: 200px;
.items{
    display: flex;
    width: 100%;
    flex-direction: column;
    .first-item{
        display: flex;
        width: 100%;
        gap: 2%;
        margin-bottom: 30px;
        .house-image{
            flex-basis: 45%;
            width: 100%;
        }

    }
    .second-item{
        display: flex;
        gap: 4.5%;
    }
}
`