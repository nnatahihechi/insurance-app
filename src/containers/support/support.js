import React from "react";
import { SupportContainer } from "./style";
import SphereImage from "../../component/sphereImage";
import GrandmaImage from "../../images/grandma.jpeg";
import BulletText from "../bulletText";
import Button from "../../component/button";
import { BulletTextVariant, InViewWrapper, sphereImageVariant } from "../../motions";
import { itemVariants } from "../../motions/textVariant";

export default function Support() {
  return (
    <SupportContainer>
      <div className="support-text flex-20">
        <span>
          <InViewWrapper variant={itemVariants(0.1)}>
            Support <br />
          </InViewWrapper>
          <InViewWrapper variant={itemVariants(0.3)}>
            at every <br />
          </InViewWrapper>
          <InViewWrapper variant={itemVariants(0.5)}>
            <span className="step">Step</span>
          </InViewWrapper>
        </span>
      </div>
      <div className="support-points flex-40">
        <InViewWrapper variant={BulletTextVariant(0.1, 0)}>
          <BulletText>
            Participate in the loyalty program Pay for the service online to get
            bonuses for our other services. we hove a lot of bonuse
          </BulletText>
        </InViewWrapper>

        <InViewWrapper variant={BulletTextVariant(0.3, 0)}>
          <BulletText>
            Participate in the loyalty program Pay for the service online to get
            bonuses for our other services. we hove a lot of bonuse
          </BulletText>
        </InViewWrapper>
        <InViewWrapper variant={BulletTextVariant(0.5, 0)}>
          <Button
            className="full-button"
            bgColor="unset"
            color="#A56B75"
            borderColor="#A56B75"
          >
            Choose a fund
          </Button>
        </InViewWrapper>
      </div>
      <InViewWrapper
            variant={sphereImageVariant()}
            style={{ transformOrigin: "bottom center" }}
            className="flex-30">
        <SphereImage image={GrandmaImage} />
      </InViewWrapper>
    </SupportContainer>
  );
}