import image_1 from "../../../../public/images/manual/Түүх.jpg";
import image_2 from "../../../../public/images/manual/8_history_2.png";
import image_3 from "../../../../public/images/manual/8_history_3.png";
import ContentWrapper, { CardData } from "@/app/wrappers/ContentWrapper";

export default function History() {
  const cards: CardData[] = [
    {
      title: "1. Зорчилтын түүх",
      description:
        "Тухайн хэрэглэгчийн автобусаар зорчсон өдөр болон чиглэл харагдана.",
      image: image_1,
    },
    {
      title: "2. Зорчилтын түүх хайх",
      description: "Мөн зорчсон түүхийг огноогоор хайх боломжтой.",
      image: image_2,
    },
    // {
    //   title: "3. Зорчилтын түүхийн дэлгэрэнгүй",
    //   description:
    //     "Зорчилтын дэлгэрэнгүй мэдээллийг харж үнэлгээ өгөх боломжтой.",
    //   image: image_3,
    // },
  ];

  return (
    <div id="history">
      <ContentWrapper title="Зорчилтын түүх" cards={cards} />
    </div>
  );
}
