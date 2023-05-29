import styled from "styled-components";

export const ButtonContainer = styled.button`
  background: ${({ bgColor, activeBgColor }) =>
    activeBgColor || bgColor || "#84d7e9"};
  border-radius: 20px;
  color: ${({ color, activeColor }) => activeColor || color || "black"};
  padding: ${({ padding }) => padding || "12px 50px"};
  border: ${({ borderColor }) =>
    borderColor ? `1px solid ${borderColor}` : "unset"};
  white-space: nowrap;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background: ${({ hoverBackground, bgColor }) =>
      hoverBackground || bgColor || "#84d7e9"};
    color: ${({ hoverColor, color }) => hoverColor || color || "black"};
  }
`;
