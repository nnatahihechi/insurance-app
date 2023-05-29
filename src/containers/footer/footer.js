import React from "react";
import { FooterWrapper } from "./style";
import { InViewWrapper } from "../../motions";
import { ImSpinner4 } from "react-icons/im";
import { itemVariants } from "../navBar/NavBar";

export default function Footer() {
  return (
    <FooterWrapper>
      <div className="d-flex product-name">
        <InViewWrapper
          className="d-flex"
          animate={["visible", "rotation"]}
          variant={itemVariants(0.1, 30)}

        >
          <ImSpinner4 size="30px" />
        </InViewWrapper>

        <InViewWrapper variant={itemVariants(0.3, 30)}>
            Darcy's Insurance products
        </InViewWrapper>
      </div>
      <div className="d-flex">
      <InViewWrapper className="link-wrapper" variant={itemVariants(0.3, 30)}>
            <a href="/"> privacy link </a>
        </InViewWrapper>

      </div>
    </FooterWrapper>
  );
}
