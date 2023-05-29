import React from "react";
import { ServicesContainer } from "./style";
import ImgLabel from "../imgLabel";
import InteriorImage from "../../images/interior.webp";
import Car from "../../images/car.avif";
import HouseImg from "../../images/house.avif";
import DrugsImg from "../../images/drugs.webp";
import SphereImage from "../../component/sphereImage";
import BalloonImg from "../../images/balloons.jpeg";
import TextCard from "../textCard/textCard";
import {
  InViewWrapper,
  scaleInVariant,
  sphereImageVariant,
} from "../../motions";

export default function Services() {
  return (
    <ServicesContainer>
      <div className="items">
        <div className="first-item">
          <InViewWrapper variant={scaleInVariant()} className="house-image">
            <ImgLabel bgImg={InteriorImage} height="450px">
              Home Insurance
            </ImgLabel>
          </InViewWrapper>
          <InViewWrapper
            variant={sphereImageVariant()}
            style={{ transformOrigin: "bottom center" }}
            className="flex-20"
          >
            <SphereImage image={BalloonImg} />
          </InViewWrapper>
          <InViewWrapper variant={scaleInVariant()} className="flex-30">
            <TextCard />
          </InViewWrapper>
        </div>

        <div className="second-item">
          <InViewWrapper variant={scaleInVariant()} className="flex-30">
            <ImgLabel bgImg={Car} height="300px">
              Vehicle damage
            </ImgLabel>
          </InViewWrapper>
          <InViewWrapper variant={scaleInVariant()} className="flex-30">
            <ImgLabel bgImg={HouseImg} height="300px">
              Mortgage insurance
            </ImgLabel>
          </InViewWrapper>
          <InViewWrapper variant={scaleInVariant()} className="flex-30">
            <ImgLabel bgImg={DrugsImg} height="300px">
              Medical expenses
            </ImgLabel>
          </InViewWrapper>
        </div>
      </div>
    </ServicesContainer>
  );
}
