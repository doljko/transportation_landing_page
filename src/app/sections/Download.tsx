import React from "react";
import Image from "next/image";
import ColorWrapper from "../wrappers/ColorWrapper";
import PlayStore from "../../../public/images/Icon/PlayStore.svg";
import AppStore from "../../../public/images/Icon/AppStore.svg";
import { useScreenSize } from "../components/getScreenSize";
import { motion } from "framer-motion";
import Start from "../../../public/images/figIMG/Phone_06.png";

export default function Download() {
  const { screenSize, windowWidth } = useScreenSize({
    landscapeRatio: { xs: 2.5, sm: 3, md: 4, lg: 6, xl: 6, "2xl": 9 },
  });

  const w = windowWidth * 0.3;
  const h = windowWidth * 0.3;
  const buttonSize = 40;

  return (
    <div id="Download" className="lg:relative shadow-2xl rounded-xl">
      <ColorWrapper color="primary" className="justify-center flex">
        <div className="container md:py-14 flex flex-col lg:flex-row lg:items-center overflow-clip">
          <div className="relative lg:flex-1 flex justify-center lg:justify-center">
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div style={{ width: w, height: h }} className="relative">
                <Image
                  src={Start}
                  alt="Library application"
                  layout="fill"
                  objectFit="contain"
                  className="pointer-events-none select-none outline-none"
                />
              </div>
            </motion.div>
          </div>

          <div className="z-10 lg:flex-1 lg:pt-16 text-base-normal flex flex-col items-center lg:items-start px-4">
            <div className="mb-8 sm:mb-10 font-normal text-sm sm:text-base">
              <h1 className="font-semibold text-2xl leading-7 sm:text-3xl mb-5 sm:mb-6">
                UBCARD аппликейшн татах
              </h1>
              <p className="mb-8 sm:mb-10 font-normal text-sm sm:text-base">
                Яг одоо аппликейшнаа татан авч хурдан, хялбар шийдлүүдийг өдөр
                тутмын амьдралдаа хэрэгжүүлээрэй. Таны автобус аяллыг
                хөнгөвчилнө.
              </p>
              <div className="flex flex-col w-2/3 md:w-auto md:flex-row gap-3 mx-auto md:mx-0">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <a className="w-full lg:w-fit focus-visible-class" href="">
                    <button className="w-full lg:w-60 text-gray-700 bg-white font-semibold rounded-2xl flex items-center justify-center gap-2 p-2">
                      <Image
                        alt="App Store Logo"
                        src={AppStore}
                        width={buttonSize}
                        height={buttonSize}
                      />
                      <span>App Store</span>
                    </button>
                  </a>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <a className="w-full lg:w-fit focus-visible-class" href="">
                    <button className="w-full lg:w-60 text-gray-700 bg-white font-semibold rounded-2xl flex items-center justify-center gap-2 p-2">
                      <Image
                        alt="Play Store Logo"
                        src={PlayStore}
                        width={buttonSize - 3}
                        height={buttonSize - 3}
                      />
                      <span>Google Play</span>
                    </button>
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </ColorWrapper>
    </div>
  );
}
