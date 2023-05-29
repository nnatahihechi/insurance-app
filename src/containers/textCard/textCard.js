import React from "react";
import { TextCardContainer } from "./style";
import Button from "../../component/button";

export default function TextCard() {
  return (
    <TextCardContainer>
      <div classname="top">
        <h1>Best Choice</h1>
        <p>
          Not all insurance are the same. That's why agency knows that your
          insurance should be customised to fit your situation
        </p>
      </div>
      <Button bgColor="#ff6476" color="0b0f17" className="service-button"> View all services </Button>
    </TextCardContainer>
  );
}
