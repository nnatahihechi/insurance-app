import React, { useState } from "react";
import { ContactContainer } from "./style";
import Button from "../../component/button";
import { buttonsList } from "./buttonsList";
import Input from "../../component/input";
import { AiOutlineCalendar } from "react-icons/ai";
import {
  BulletTextVariant,
  InViewWrapper,
  scaleInVariant,
} from "../../motions";
import { itemVariants } from "../../motions/textVariant";

export default function Contact() {
  const [activeButton, setActiveButtonIndex] = useState(0);
  return (
    <ContactContainer>
      <div className="calculate-segment">
        <InViewWrapper variant={itemVariants(0.1)}>
          <h1>Need numbers?</h1>
        </InViewWrapper>

        <div className="buttons">
          {buttonsList.map((item, index) => (
            <InViewWrapper variant={itemVariants(index / 10, 30)}>
              <Button
                activeBgColor={index === activeButton && "#fff"}
                activeColor={index === activeButton && "#0E1D30"}
                hoverBackground="#fff"
                hoverColor="#0E1D30"
                onClick={() => setActiveButtonIndex(index)}
                key={index + item}
                padding="10px 25px"
                color="#fff"
                bgColor="#0E1D30"
                className="button"
              >
                {item}
              </Button>
            </InViewWrapper>
          ))}
        </div>
        <div className="inputs">
          <InViewWrapper variant={scaleInVariant()} className="flex-45">
            <label>Enter the country</label>
            <Input placeholder="Australia" />
          </InViewWrapper>
          <InViewWrapper variant={scaleInVariant()} className="flex-45">
            <label>Choose travel dates</label>
            <Input suffixIcon={AiOutlineCalendar} type="date" />
          </InViewWrapper>
        </div>
        <InViewWrapper variant={BulletTextVariant(0.5, 0)}>
          <Button className="calc-button full-button" bgColor="#ff6476">
            Calculate
          </Button>
        </InViewWrapper>
      </div>

      <div className="helpful-links">
        <div className="segment">
          <InViewWrapper variant={itemVariants(0.1)}>
            <h3>Insurance services</h3>
          </InViewWrapper>
          <InViewWrapper
            variant={BulletTextVariant(0.5, 30, -30)}
            className="links"
          >
            <a href="/">Medical expenses</a>
            <a href="/">Family health insurance</a>
            <a href="/">vehicle damage</a>
          </InViewWrapper>
        </div>
        <div className="segment">
          <InViewWrapper variant={itemVariants(0.1)}>
            <h3>Company</h3>
          </InViewWrapper>
          <InViewWrapper
            variant={BulletTextVariant(0.5, 30, -30)}
            className="links"
          >
            <a href="/">About us</a>
            <a href="/">Career</a>
            <a href="/">Help</a>
            <a href="/">FAQ</a>
            <a href="/">Blog</a>
          </InViewWrapper>
        </div>
        <div className="segment">
          <InViewWrapper variant={itemVariants(0.1)}>
            <h3>Bonus</h3>
          </InViewWrapper>
          <InViewWrapper
            variant={BulletTextVariant(0.5, 30, -30)}
            className="links"
          >
            <a href="/">Gift certificate</a>
            <a href="/">Affiliate Program</a>
            <a href="/">Trainings</a>
          </InViewWrapper>
        </div>
      </div>
    </ContactContainer>
  );
}
