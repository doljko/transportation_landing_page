"use client";

import React from "react";
import ColorWrapper from "../components/ColorWrapper";
import Start from "../../../public/images/figIMG/Splash.png";
import Image from "next/image";
import { IPhone } from "../components/iphone";
import SwipeWrapper from "../components/SwipeWrapper";

const createAnimatedText = (text: string) => {
  return text.split(" ").map((word, index) => (
    <SwipeWrapper key={index} animation="fade-right" delay={index * 300}>
      <div className="text-4xl sm:text-8xl font-bold lg:ml-10 mt-4 sm:mt-10 lg:mt-0 mb-4">
        {word}
      </div>
    </SwipeWrapper>
  ));
};

const Hero: React.FC = () => {
  let screenSize: number = 0;
  if (typeof window !== "undefined") {
    if (window.innerWidth >= window.innerHeight) {
      screenSize = 5;
    } else {
      screenSize = 2.5;
    }
  }
  const text = createAnimatedText("ШИНЭ АВТОБУС АПП!!!");

  return (
    <ColorWrapper color={"white"}>
      <div
        id="Hero"
        className="flex  justify-center items-center space-y-4 sm:space-y-0"
      >
        <div className=" z-10">
          <IPhone
            boxShadow="0px 5px 25px rgba(0,0,0,0.6)"
            width={window.innerWidth / screenSize}
          >
            <Image src={Start} fill alt="" priority />
          </IPhone>
        </div>
        <div className="flex flex-col">{text}</div>
      </div>
    </ColorWrapper>
  );
};

export default Hero;
