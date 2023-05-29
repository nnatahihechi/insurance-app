import styled from "styled-components";


export const SupportContainer = styled.div`
    display: flex;
    gap: 10%;
    align-items: center;
    margin-top: 100px;
    .support-text{
        span{
            font-family: blimone;
            font-size: 70px;
            line-height:80%;
            .step{
                font-size: 100px;
            }
        }
    }
    .support-points{
        display: flex;
        flex-direction: column;
        .point-text{
            width: 80%;
        }
    }
    
`