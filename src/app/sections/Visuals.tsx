import { IPhone } from "../components/iphone";
import Image from "next/image";
import GG from "../../../public/images/figIMG/Home-Regular 3.png";
import Payment from "../../../public/images/figIMG/Qpay.png";
import phys from "../../../public/images/figIMG/Биет-Картууд.png";
import location from "../../../public/images/figIMG/Stations 4.png";
import direction from "../../../public/images/figIMG/Get directions.png";
import VisualWrapper from "../wrappers/VisualWrapper";

import { useScreenSize } from "../components/getScreenSize";
import Glider from "../components/Glider";
import { animate, motion } from "framer-motion";

export default function Visuals() {

  const { screenSize } = useScreenSize({
    landscapeRatio: { xs: 2.5, sm: 5, md: 6, lg: 6, xl: 6, "2xl": 7, "3xl": 8 },
  });

  const globalShadow: string = "-10px 10px 5px rgba(0,0,0,0.3)"

  return (
    <div
      id="Visual"
      className="flex flex-col md:flex-row flex-wrap justify-center"
    >
      <div className="md:w-1/2">

        <VisualWrapper
          color="primary"
          animation="fade-right"
          className=" "
          text="Биет картаа уншуулан утсаараа зорчих шинэ үйлчилгээ"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95, rotate: 1 }}>
            <IPhone boxShadow={globalShadow} width={screenSize}>
              <Image src={phys} alt="" layout="fill" priority />
            </IPhone>
          </motion.div>
        </VisualWrapper>



      </div>


      <div className="md:w-1/2">

        <VisualWrapper
          color="secondary"
          animation="fade-right"
          text="Qpay, Socialpay болон банкны картаар төлбөр төлөх хялбар шийдэл"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95, rotate: 2 }}>
            <IPhone boxShadow={globalShadow} width={screenSize}>
              <Image src={Payment} alt="" priority fill />
            </IPhone>
          </motion.div>
        </VisualWrapper>

      </div>



      <div className="w-full">


        <Glider />


        <VisualWrapper
          color="transparent"
          animation="fade-left"
          text="Автобусны карт дахин ашиглах шаардлагагүй. Гар утасны QR кодоо ашиглан автобусны төлбөрийг хялбараар төлөх шинэ үйлчилгээ"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95, rotate: 2 }}>
            <IPhone boxShadow={globalShadow} width={screenSize}>
              <Image src={GG} alt="" layout="fill" priority />
            </IPhone>
          </motion.div>
        </VisualWrapper>

        <div className=" -z-10">
          <Glider />
        </div>

      </div>



      <div className="md:w-1/2">

        <VisualWrapper
          color="secondary"
          animation="fade-right"
          text="Газрын зураг дээрээс автобусны байршил, зогсоол, карт борлуулах цэгүүдийг харах"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95, rotate: 2 }}>
            <IPhone boxShadow={globalShadow} width={screenSize}>
              <Image src={location} alt="" layout="fill" priority />
            </IPhone>
          </motion.div>
        </VisualWrapper>

      </div>



      <div className="md:w-1/2">

        <VisualWrapper
          shadow=""
          color="primary"
          animation="fade-right"
          className=""
          text="Очих байршлаа сонгоод хялбар зорч"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95, rotate: 2 }}>
            <IPhone boxShadow={globalShadow} width={screenSize}>
              <Image src={direction} alt="Payment" fill priority />
            </IPhone>
          </motion.div>
        </VisualWrapper>

      </div>
    </div>
  );
}
