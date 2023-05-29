import styled from "styled-components";


export const AboutContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
    align-items:center;
    .slider{
        flex-basis: 70%;
        box-sizing:border-box;
        display: flex;
        flex-direction: column;
        align-items:center;

        .indicator{
            display: flex;
            gap: 10%;
            margin: 20px 0;
        }
        .testimonial{
            background: #0E1D30;
            border-radius: 25px;
            padding: 30px 100px;
            
            height:500px;
            
            display: flex;
            gap:10%;
            box-sizing:border-box;
            .img {
                flex-basis: 30%;
            }
            .text{
                flex-basis: 60%;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                .top{
    
                    h1{
                        font-size: 40px;
                        margin: unset;
                    }
                    span{
                        color:#4E607C;
                    }
                    p{
                        font-size: 14px;
                    }
                }
                .bottom{
                    margin-bottom: 15%;
                }
            }
        }
    }

    .experts{
        font-family: blimone;
        font-size: 70px;
        word-break: break-all;
        line-height:70px;
    }
`