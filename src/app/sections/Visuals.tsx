"use client";

import { IPhone } from "../components/iphone";
import Image from "next/image";
import styled from "@emotion/styled";
import Spacer from "../components/spacer";

import GG from "../../../public/images/figIMG/Home-Regular 3.png";
import Payment from "../../../public/images/figIMG/Qpay.png";
import map from "../../../public/images//figIMG/Stations 4.png";
import ColorWrapper from "../wrappers/ColorWrapper";
import SwipeWrapper from "../wrappers/SwipeWrapper";

import { useScreenSize } from "../components/getScreenSize";

export default function Visuals() {
  const screenSize = useScreenSize();

  const StyledImage = styled(Image)`
    object-fit: cover;
    object-position: center top;
  `;

  const StyledH1 = styled.h1`
    font-size: calc(0.7em + 1vw);
  `;

  return (
    <div id="Visual">
      <SwipeWrapper animation="fade-up">
        <div className="shadow-xl rounded-xl">
          <ColorWrapper color={"primary"}>
            <div className="flex justify-evenly">
              <div className="flex basis-1/3 justify-center items-center">
                <IPhone
                  boxShadow="0px 5px 25px rgba(0,0,0,0.6)"
                  width={screenSize}
                >
                  <Image src={GG} alt="" layout="fill" priority />
                </IPhone>
              </div>
              <div className="flex basis-1/3 justify-center items-center">
                <StyledH1>
                  Заавал автобусны карт ашиглах шаардлагагүй QR Code уншуулаад
                  зорчих боломж
                </StyledH1>
              </div>
            </div>
          </ColorWrapper>
        </div>
      </SwipeWrapper>

      <Spacer height="40px" width="0" />

      <SwipeWrapper animation="fade-up-left">
        <div className="shadow-xl rounded-xl">
          <ColorWrapper color={"transparent"}>
            <div className="flex justify-evenly">
              <div className="flex basis-1/3 justify-center items-center">
                <StyledH1>
                  Qpay, Socialpay болон банкны картаар төлбөр төлөх боломжтой
                  хялбар төлбөрийн шийдэл
                </StyledH1>
              </div>
              <div className="flex basis-1/3 justify-center items-center">
                <IPhone
                  boxShadow="0px 5px 25px rgba(0,0,0,0.6)"
                  width={screenSize}
                >
                  <StyledImage src={Payment} alt="" layout="fill" priority />
                </IPhone>
              </div>
            </div>
          </ColorWrapper>
        </div>
      </SwipeWrapper>

      <Spacer height="40px" width="0" />

      <SwipeWrapper animation={"fade-up-right"}>
        <div className="shadow-xl rounded-xl">
          <ColorWrapper color={"primary"}>
            <div className="flex justify-evenly">
              <div className="flex basis-1/3 justify-center items-center">
                <IPhone
                  boxShadow="0px 5px 25px rgba(0,0,0,0.6)"
                  width={screenSize}
                >
                  <Image src={map} alt="" layout="fill" priority />
                </IPhone>
              </div>
              <div className="flex basis-1/3 justify-center items-center">
                <StyledH1>
                  Газрын зураг дээрээс автобусны байршил болон зогсоол, карт
                  борлуулах цэгүүдийг харах
                </StyledH1>
              </div>
            </div>
          </ColorWrapper>
        </div>
      </SwipeWrapper>
    </div>
  );
}
