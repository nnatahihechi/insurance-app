import styled from "styled-components";

export const HeroContainer = styled.div`
    display: flex;
    margin-top: 10%;
    .hero-text{
        flex-basis: 60%;
        font-family: blimone !important;
        font-size: 180px;
        font-weight: bold;
        font-stretch: expanded;
        letter-spacing: -5px;
        line-height: 90%;
    }

    .hero-info{
        flex-basis: 40%;
        display: flex;
        gap: 20px;
        .info{
            flex-basis: 50%;
            display: flex;
            flex-direction: column;
            
        }
        .hero-image{
            flex-basis: 50%;
            img{
                border-bottom-right-radius: 50% 25%;
                border-bottom-left-radius: 50% 25%;
                border-top-right-radius: 50% 25%;
                border-top-left-radius: 50% 25%;
            }
        }
    }

    .arrow-down{
        background: #1f283d;
        border-radius: 20px;
        padding: 5px;
    }


`