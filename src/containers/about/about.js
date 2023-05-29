import React, { useState, useEffect, useCallback } from "react";
import { AboutContainer } from "./style";
import SphereImage from "../../component/sphereImage";
import Button from "../../component/button";
import BulletText from "../bulletText";
import { sliderData } from "./sliderData";
import { BsCircleFill } from "react-icons/bs";
import { AnimatePresence } from "framer-motion";
import { InViewWrapper, carouselVariants, itemVariants, sphereImageVariant, BulletTextVariant } from "../../motions";


export default function About() {
  const [slideItemIndex, setSlideItemIndex] = useState(0);
  const [[page, direction], setPage] = useState([0, 0]);

  const handleClick = useCallback((index) => {
    let direction = 1;
    if (index < slideItemIndex){
      direction = -1
    }
    setPage([index,direction])
    setSlideItemIndex(index)
  }, [slideItemIndex])

  useEffect(() => {
    const interval = setInterval(() => {
      if (slideItemIndex + 1 < sliderData.length) {
        handleClick(slideItemIndex + 1);
      } else {
        handleClick(0);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [slideItemIndex, handleClick]);

  

  const Testimonial = ({ index }) => (
    <div className={`testimonial`}>
      <InViewWrapper variant={sphereImageVariant(0.3)} className="img" style={{ transformOrigin: "bottom center" }}>
        <SphereImage image={sliderData[index].image} />
      </InViewWrapper>
      <div className="text">
        <div className="top">
          <InViewWrapper variant={itemVariants(1.1)}>
            <h1>{sliderData[index].name}</h1>
          </InViewWrapper>

          <InViewWrapper variant={itemVariants(1.3)}>
          <span>{sliderData[index].title}</span>

          </InViewWrapper>
          <InViewWrapper variant={itemVariants(1.5)}>
          <p>{sliderData[index].description}</p>

          </InViewWrapper>
        </div>
        <div className="bottom">
          <InViewWrapper variant={BulletTextVariant(1.5, 0)}>

          <Button>Get a Consultation</Button>
          </InViewWrapper>
        </div>
      </div>
    </div>
  );

  return (
    <AboutContainer initial={false} custom={direction}>
      <div className="slider">
        <div style={{display: "flex"}}>

        <AnimatePresence>
          <InViewWrapper
            key={page}
            variant={carouselVariants}
            animate="center"
            initial="enter"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
              y: 20
            }}
          >
            <Testimonial index={slideItemIndex} />
          </InViewWrapper>
        </AnimatePresence>
        </div>

        <div className="indicator">
          {sliderData.map((_, index) => (
            <BsCircleFill onClick={()=>handleClick(index)} />
          ))}
        </div>
      </div>

      <InViewWrapper variant={itemVariants(0.1, 200)}>
        
      <BulletText side>
        <span className="experts">
          <InViewWrapper variant={itemVariants(0.1, 210)}>
            Our <br />
          </InViewWrapper>
          <InViewWrapper variant={itemVariants(0.3, 210)}>
            Experts <br />
          </InViewWrapper>
          <InViewWrapper variant={itemVariants(0.3, 210)}>
            Say
          </InViewWrapper>
        </span>
      </BulletText>
      </InViewWrapper>
    </AboutContainer>
  );
}
