import React from "react";
import { ButtonContainer } from "./style";

export default function Button({
  hoverBackground,
  hoverColor,
  activeBgColor,
  activeColor,
  bgColor,
  color,
  borderColor,
  children,
  className,
  onClick,
  active,
  padding,
}) {
  return (
    <ButtonContainer
      activeBgColor={activeBgColor}
      activeColor={activeColor}
      bgColor={bgColor}
      borderColor={borderColor}
      color={color}
      hoverBackground={hoverBackground}
      hoverColor={hoverColor}
      className={className}
      onClick={onClick}
      active={active}
      padding={padding}
    >
      {children}
    </ButtonContainer>
  );
}
