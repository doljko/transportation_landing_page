import React, { ReactNode } from "react";
import ColorWrapper from "@/app/wrappers/ColorWrapper";
import Card from "@/app/components/Card";
import { IPhone } from "@/app/components/iphone";
import SideButton from "@/app/components/SideButton";
import Image, { StaticImageData } from "next/image";
import { useScreenSize } from "../components/getScreenSize";

export type CardData = {
  title: string;
  description: string;
  image: StaticImageData;
};

interface ContentWrapperProps {
  title: string;
  cards: CardData[];
}

const ContentWrapper: React.FC<ContentWrapperProps> = ({
  title,
  cards,
}: ContentWrapperProps) => {
  const isMobile =
    typeof window !== "undefined"
      ? window.innerWidth < window.innerHeight
      : false;

  const screenSize = useScreenSize();

  return (
    <div
      className={`shadow-md rounded-3xl flex ${
        isMobile ? "flex-col" : "flex-row"
      }`}
    >
      <ColorWrapper color="transparent">
        <div className="text-black text-3xl pl-10 md:text-4xl">{title}</div>
        <div>
          <div
            className={`flex ${
              isMobile ? "flex-col space-y-8" : "flex-row space-x-8"
            } justify-around items-center overflow-auto`}
          >
            {cards.map((card, index) => (
              <>
                <Card title={card.title} description={card.description}>
                  <div className="flex w-11/12 md:w-7/10 mx-auto justify-center">
                    <IPhone boxShadow={undefined} width={screenSize}>
                      <Image alt="" src={card.image} fill priority />
                    </IPhone>
                  </div>
                </Card>
                {index < cards.length - 1 && (
                  <SideButton direction={isMobile ? "down" : "right"} />
                )}
              </>
            ))}
          </div>
        </div>
      </ColorWrapper>
    </div>
  );
};

export default ContentWrapper;