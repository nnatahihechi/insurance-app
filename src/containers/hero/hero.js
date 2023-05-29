import React from "react";
import { HeroContainer } from "./style";
import BulletText from "../bulletText";
import ArrowDown from "../../icons/arrowDown";
import BallonImage from "../../images/balloons.jpeg";
import SphereImage from "../../component/sphereImage/sphereImage";
import { motion } from "framer-motion";
import {
  BulletTextVariant,
  TextAnimation,
  sphereImageVariant,
} from "../../motions";

export default function Hero() {
  return (
    <HeroContainer>
      <span className="hero-text">
        <TextAnimation delay={0.1}>
          Darcy's <br />
        </TextAnimation>
        <TextAnimation delay={0.3}>
          Insurance
          <br />
        </TextAnimation>

        <TextAnimation delay={0.5}>
          Products <br />
        </TextAnimation>
      </span>

      <div className="hero-info">
        <div className="info">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={BulletTextVariant(0.1)}
          >
            <BulletText>
              Our plans are saving policyholders 30%-60% on premiums
            </BulletText>
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={BulletTextVariant(0.3)}
          >
            <BulletText>
              We offer a choice of low dedatibles and include no cost
              value-added service
            </BulletText>
          </motion.div>
          <div>
            <ArrowDown className="arrow-down" />
          </div>
        </div>
        <motion.div
          variants={sphereImageVariant()}
          initial="hidden"
          animate={["visible", {}]}
          className="hero-image"
          style={{ transformOrigin: "bottom center" }}
        >
          <SphereImage image={BallonImage} />
        </motion.div>
      </div>
    </HeroContainer>
  );
}
