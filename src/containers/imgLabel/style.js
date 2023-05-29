import styled from "styled-components";
export const ImgLabelContainer = styled.div`
  background-image: url(${({ bgImg }) => bgImg});
  border-radius: 10px;
  border: unset;
  display: flex;
  flex-direction: column;
  height: ${({ height }) => height};
  width: 100%;
  background-size: cover;
  justify-content: flex-end;
  padding: 20px;
  box-sizing: border-box;
  .text-box{
    margin-bottom:20px;
    display: flex;
    .content{
      box-sizing: border-box;
      background: #1f283d;
      padding: 15px;
      border-radius: 25px;
    }
  }
`;
