import Image from "next/image";
import image1 from "../images/search.svg";
import image2 from "../images/money.svg";
import image3 from "../images/calendar.svg";
import image4 from "../images/crash.svg";
import styles from "./whyMe.module.scss";

export default function WhyMe() {
  const arrData = [
    {
      image: image1,
      clName: "image1",
      title: "Бесплатный выезд и осмотр",
      _id: "6bdc2c2b-d8cf-41b0-8ee3-306beb3f28c1",
    },
    {
      image: image2,
      clName: "image2",
      title: "Деньги сразу удобным для вас способом",
      _id: "6bdc2c2b-d8cf-41b0-8ee3-306beb3f28c2",
    },
    {
      image: image3,
      clName: "image3",
      title: "Работаем без выходных",
      _id: "6bdc2c2b-d8cf-41b0-8ee3-306beb3f28c3",
    },
    {
      image: image4,
      clName: "image4",
      title: "Выкупаем автомобили в любом состоянии",
      _id: "6bdc2c2b-d8cf-41b0-8ee3-306beb3f28c4",
    },
  ];

  const imageClassMap = {
    [image1]: styles.image1,
    [image2]: styles.image2,
    [image3]: styles.image3,
    [image4]: styles.image4,
  };

  return (
    <section id="whyMe" className={styles.container}>
      <div className={styles.contentContainer}>
        {arrData &&
          arrData.map((item) => (
            <div className={styles.wrapper} key={item._id}>
              <Image
                className={`${styles.img} ${styles[item.clName]}`}
                src={item.image}
                alt={item.title}
              />
              <p className={styles.subtitle}>{item.title}</p>
            </div>
          ))}
      </div>
    </section>
  );
}
