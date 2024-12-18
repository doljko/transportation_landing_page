import React from "react";
import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";

const InfoSection: React.FC = () => {
  return (
    <div className=" pt-8 text-gray-400">
      <div className="max-w-screen-xl mx-auto flex flex-wrap">
        <div className="w-full md:w-1/3 px-4 mb-5">
          <div className=" p-4">
            <h5 className="text-xl font-bold mb-2">Бидний тухай</h5>
            <p className="mb-4">
              Нийтийн тээврийн салбар орчин үеийн дэвшилтэт техник, технологийг
              нэвтрүүлэх замаар иргэдээ дээдэлсэн тээврийн системий бий болгоно.
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/3 px-4 mb-5">
          <div className=" p-4">
            <h5 className="text-xl font-bold mb-2">Үйл ажиллагаа</h5>
            <nav>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://transport.ub.gov.mn/en/?page_id=4653"
                    className=" hover:underline"
                  >
                    Хүүхдийн автобусны зөвшөөрөл
                  </a>
                </li>
                <li>
                  <a
                    href="https://transport.ub.gov.mn/en/?page_id=4341"
                    className="hover:underline"
                  >
                    Ачаа тээврийн түр зөвшөөрөл
                  </a>
                </li>
                <li>
                  <a
                    href="https://transport.ub.gov.mn/en/?page_id=4656"
                    className="hover:underline"
                  >
                    Ажилчдын автобусны зөвшөөрөл
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="w-full md:w-1/3 px-4 mb-5">
          <div className=" p-4">
            <h5 className="text-xl font-bold mb-2">Холбоо барих</h5>
            <p>
              Улаанбаатар хот, Чингэлтэй дүүрэг, 4 дүгээр хороо, Бага тойруу 15,
              Нийслэлийн засаг захиргааны 4 дүгээр байр 11 давхарт
            </p>
            <p>Утас: 7004-4040</p>
          </div>
        </div>


      </div>
    </div>
  );
};

export default InfoSection;
