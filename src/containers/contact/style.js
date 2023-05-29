import styled from "styled-components";


export const ContactContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
    .calculate-segment{
        flex-basis: 40%;
        display: flex;
        flex-direction: column;
        h1{
            font-family: blimone;
            font-size: 48px;
        }
        .buttons{
            display: flex;
            .button{
                flex-basis: 20%;
            }
        }
        .inputs{
            margin-top: 30px;
            display: flex;
            gap: 10%;
            margin-top: 30px;
            label{
                font-size: 12px;
            }
        }

        .calc-button{
            margin-top: 30px;
        }

    }

    .helpful-links{
        flex-basis: 30%;
        display: flex;
        flex-direction: column;
        .segment{
            display: flex;
            flex-direction: column;
            .links{
                a{
                    text-decoration: unset;
                    color: rgb(221, 220, 221);
                    margin-right: 5px;
                    color: #494D54;
                    font-size: 14px;
                }
            }
        }
    }
`