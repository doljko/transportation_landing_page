"use client";

import Image from "next/image";
import ColorWrapper from "../components/ColorWrapper";
import PlayStore from "../../../public/images/Icon/PlayStore.svg";
import AppStore from "../../../public/images/Icon/AppStore.svg";
import { IPhone } from "../components/iphone";
import Start from "../../../public/images/figIMG/Splash.png";

export default function Download() {
  const screenSize = 80;
  return (
    <div className="shadow-2xl rounded-xl">
      <ColorWrapper color="transparent">
        <div
          id="Download"
          className="container pt-8 pb-8 sm:pb-6 lg:p-0 flex flex-col lg:items-center gap-16 overflow-clip justify-center items-center px-4 sm:px-0 mx-5 sm:mx-10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
            <div className="flex justify-center">
              <IPhone
                boxShadow="0px 5px 25px rgba(0,0,0,0.6)"
                width={screenSize}
              >
                <Image src={Start} fill alt="Splash Image" />
              </IPhone>
            </div>
            <div>
              <div className="z-10 lg:pt-16 text-base-normal">
                <h1 className="font-semibold text-xl leading-7 sm:text-xl mb-5 sm:mb-6">
                  UBCARD аппликейшн татах
                </h1>
                <h1 className="font-normal sm:text-base">
                  Яг одоо татан авч хурдан, хялбар шийдлүүдийг өдөр тутмын
                  амьдралдаа хэрэгжүүлээрэй. Таны автобус аяллыг хөнгөвчилнө.
                </h1>
              </div>
              <div className="flex flex-col items-center justify-center w-full sm:w-3/4 lg:w-full">
                <div className="flex flex-col sm:flex-row gap-3">
                  <a className="w-full lg:w-fit focus-visible-class" href="">
                    <button className="w-full lg:w-60 bg-neutral-800 font-semibold text-white rounded-2xl flex items-center border border-gray-400 justify-center gap-2 lg:gap-6 p-2">
                      <Image
                        alt="App Store Logo"
                        src={AppStore}
                        width={50}
                        height={50}
                      />
                      <span>App Store</span>
                    </button>
                  </a>
                  <a className="w-full lg:w-fit focus-visible-class" href="">
                    <button className="w-full lg:w-60 bg-neutral-800 font-semibold text-white rounded-2xl flex items-center border border-gray-400 justify-center gap-2 lg:gap-6 p-2">
                      <Image
                        alt="Play Store Logo"
                        src={PlayStore}
                        width={50}
                        height={50}
                      />
                      <span>Google Play</span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ColorWrapper>
    </div>
  );
}
