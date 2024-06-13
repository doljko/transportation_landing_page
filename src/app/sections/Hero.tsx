import React, { useEffect, useState } from "react";
import Image from "next/image";
import ColorWrapper from "../wrappers/ColorWrapper";
import { useScreenSize } from "../components/getScreenSize";
import SwipeWrapper from "../wrappers/SwipeWrapper";
import PlayStore from "../../../public/images/Icon/PlayStore.svg";
import AppStore from "../../../public/images/Icon/AppStore.svg";
import test from "../../../public/images/figIMG/test (2).png";
import { motion } from "framer-motion";

const createAnimatedText = (texts: string[], animationType: string) => {
  return texts.map((text, index) => (
    <SwipeWrapper key={index} animation={animationType} delay={index * 300}>
      <div
        className={`text-4xl text-ub-secondary sm:text-5xl md:text-6xl font-bold lg:ml-10 mt-0  lg:mt-0 mb-4 text-center sm:text-center`}
      >
        {text}
      </div>
    </SwipeWrapper>
  ));
};

const Hero: React.FC = () => {
  const { screenSize, windowWidth } = useScreenSize({
    landscapeRatio: { xs: 2, sm: 3, md: 4, lg: 4, xl: 5, "2xl": 5.5 },
  });
  const animationType = windowWidth <= 480 ? "fade-right" : "fade-right";
  const text = createAnimatedText(
    ["Автобусны шинэ", "апп гарлаа!"],
    animationType
  );

  const buttonSize: number = 35;

  return (
    <ColorWrapper color={"transparent"}>
      <div
        id="Hero"
        className={`flex flex-col justify-center items-center space-y-4 pb-16 pt-10  md:space-y-0 md:flex-row lg:space-y-0 lg:flex-row xl:space-y-0 xl:flex-row 2xl:space-y-0 2xl:flex-row`}
      >
        <div className="flex flex-col space-y-4 md:w-1/2 md:flex md:items-start justify-center md:justify-start md:pl-10">
          {text}
          <p className="px-20 text-center sm:px-20 text-lg text-gray-500 sm:text-xl md:text-2xl lg:ml-10 md:px-0 md:text-left">
            welcome the new and improved bus app. It would legit knock your
            socks off if it had hands.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 lg:pl-10 justify-center sm:justify-center items-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.99 }}>
              <a
                className="w-1/2 sm:w-auto lg:w-fit focus-visible-class"
                href=""
              >
                <button className="w-full sm:w-60 text-gray-100 bg-ub-secondary font-semibold rounded-2xl flex items-center justify-center gap-2 p-2">
                  <Image
                    alt="App Store Logo"
                    src={AppStore}
                    width={buttonSize}
                    height={buttonSize}
                  />
                  <span className="text-center sm:text-left">App Store</span>
                </button>
              </a>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.99 }}>
              <a
                className="w-1/2 sm:w-auto lg:w-fit focus-visible-class"
                href=""
              >
                <button className="w-full sm:w-60 text-gray-100 bg-ub-secondary font-semibold rounded-2xl flex items-center justify-center gap-2 p-2">
                  <Image
                    alt="Play Store Logo"
                    src={PlayStore}
                    width={buttonSize}
                    height={buttonSize}
                  />
                  <span className="text-center sm:text-left">Google Play</span>
                </button>
              </a>
            </motion.div>
          </div>
        </div>
        <div className="z-10 md:w-1/2 md:flex md:items-center md:justify-center relative">
          <motion.div className="absolute md:w-3/4 md:h-1/2 rounded-bl-full rounded-tr-full bg-ub-secondary" />
          <div className="flex justify-center items-center z-10">
            <Image
              src={test}
              alt="Start Image"
              width={250}
              height={250}
              priority
            />
          </div>
        </div>
      </div>
    </ColorWrapper>
  );
};

export default Hero;
