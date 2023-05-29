import styled from "styled-components";

export const BulletTextContainer = styled.div`
    display: flex;
    flex-direction: ${(({side})=>side?"row":"column")};
    gap:20px;
    margin-bottom: 40px;
`