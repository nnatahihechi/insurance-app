import styled from "styled-components";


export const NavBarContainer = styled.div`
    .navbar-motion-wrapper{
        display: flex;
        justify-content: space-between;
        widht: 100%;
        padding: 20px 0;
        align-items: center;
        .nav-body{
            width: 100%;
            display: flex;
            justify-content: center;
            align-items:center;
            .nav-links{
                display:flex;
                margin-right: 35px;
                align-items: center;
            }
        }
        .nav-right{
            widht: 100%;
            display: flex;
            gap: 20px;
            .login{
                display: flex;
                align-items: center;
                .text{
                    margin-left: 10px;
                }
            }
        }
    }

`