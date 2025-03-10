import React from "react";
import styles from "./WhatCarBuy.module.scss";
import { CarBuyCarousel } from "@/widgets/carBuyCarousel/ui/carBuyCarousel/carBuyCarousel";
import car1 from "../images/car1.webp";
import car2 from "../images/car2.webp";
import car3 from "../images/car3.webp";
import car4 from "../images/car4.webp";
import car5 from "../images/car5.webp";
import car6 from "../images/car6.webp";
import car7 from "../images/car7.webp";
import car8 from "../images/car8.webp";
import car9 from "../images/car9.webp";
import car10 from "../images/car10.webp";
import car11 from "../images/car11.webp";

export const WhatCarBuy = () => {
  const arrData = [
    {
      img: car1,
      subtitle1: "Mercedes CLA",
      subtitle2: "2013г 1.6л (156лс.) РКПП",
      text: "Нужно было продать машину срочно. Сами же знаете как страшно связываться неизвестно с кем и что будет. Настроился на защитный манер, а тут все тактично. Оценили и объяснили почему такая стоимость - согласился, ведь оценка устроила и документы все оформили, и деньги сразу. Никаких проблем. Доволен так то.",
    },
    {
      img: car2,
      subtitle1: "Hyundai Solaris",
      subtitle2: "2017г 1.6л (123с.) АКПП",
      text: "Приятные сотрудники. Выкупили машину на 40 тысяч дороже, чем мне предлагали другие. Договор официальный, всё с этим хорошо, сняли с учета в день сделки. Приятно, когда всё получается по уму!",
    },
    {
      img: car3,
      subtitle1: "Renault Sandero",
      subtitle2: "2010г 1.6л (102лс.) МКПП",
      text: "Очень доволен их работой. Сотрудник для оценки приехал быстро, был очень вежливый и скрупулезный, смотрел очень внимательно, но самое главное, цену назначил адекватную. Это было очень приятно. С оформлением документов тоже никаких проблем не было. Сэкономили мне кучу нервов и сил, спасибо.",
    },
    {
      img: car4,
      subtitle1: "Opel Astra",
      subtitle2: " 2008г 1.6л (115лс.) МКПП",
      text: "Отличная фирма, очень рада, что их в свое время нашла и с ними работала! Машину оценили быстро и очень хорошо, без проблем все оформили! Никакой головной боли с продажей! Быстро, четко, выгодно! Очень рекомендую!",
    },
    {
      img: car5,
      subtitle1: "Hyundai Creta",
      subtitle2: "2018г 1.6л (123лс.) АКПП",
      text: "Из достоинств выделю оперативность по оформлению документов и быстрый перевод денег. Немного переживал, все таки условия предложили адекватные э, даже как то не верилось что все так легко и просто получится, но в итоге остался доволен полностью и буду вас рекомендовать если что. Спасибо!",
    },
    {
      img: car6,
      subtitle1: "Nissan Teana",
      subtitle2: "2013г 2.5л (167лс.) Вариатор",
      text: "Не располагал временем, поэтому обратился в срочный выкуп для оценки своей машины. На сайте сказано, что реагируют быстро. Все правда. В моем случае специалиста должно ждать не пришлось. Приехал человек и мы сразу договорились о цене. Спасибо за скорость принятии решений и за оформление документов!",
    },
    {
      img: car7,
      subtitle1: "Citroen C4",
      subtitle2: "2013 1.6л (109лс.) АКПП",
      text: "Процедура хоть и волнительная для меня была, но всё прошло в положительном ключе. Продал фирме машину, выкупили ее у меня в тот же день. Приехали, оценили состояние, озвучили стоимость и собственно мы провели сделку. Всё хорошо, деньги я получил на руки, так мне удобнее было. Сотрудник был со мной компетентен, спасибо! Главное что еще понравилось, снимают автомобильс учета в день сделки",
    },
    {
      img: car8,
      subtitle1: "Лада Гранта",
      subtitle2: "2012 1.6л (87лс.) МКПП",
      text: "Покупал новую машину, а старую продавать попросту не было времени, что не день так на работе. Нашел этот сайт, оставил заявку, на следующий день ко мне приехали и полностью осмотрели автомобиль, уточняли некоторые детали по документам, состоянию во время осмотра. В тот же день я продавать был не готов, поэтому перенесли на пару дней вперед. По цене от рыночной сильно не урезали, буквально 5-10 процентов, но учитывая что время на продажу я не тратил, можно сказать что я даже в плюсе. Деньги перевели сразу после сделки, никаких проблем во время оформления документов и передачи денег не возникало!",
    },
    {
      img: car9,
      subtitle1: "Audi A8",
      subtitle2: "2006г 4.2л (335лс.) АКПП",
      text: "Деньги понадобились срочно, поэтому пошла на этот сайт. Понимала, что заплатят процентов на 20 меньше, но финансовый вопрос буквально горел. Позвонила: приехали, оценили, забрали. На все — про-все буквально два часа. Да и заплатили больше, чем ожидала. Рекомендую",
    },
    {
      img: car10,
      subtitle1: "BMW X6 M",
      subtitle2: "2012г 4.4л (555лс.) АКПП",
      text: "Всегда довольно скептично относился к срочному выкупу автомобилей, пока не попробовал эту услугу сам. Срочно понадобились деньги, покупатели не очень-то часто звонили, а до сделки дело не доходило. Оставил заявку, мне сразу назвали хорошую цену, процентов на 7-10 ниже рыночной. Через час приехал сотрудник фирмы, мы оформили договор и я получил свои деньги. Сервисом доволен.",
    },
    {
      img: car11,
      subtitle1: "Mercedes GLE",
      subtitle2: "2018г 2.9л (330лс.) АКПП",
      text: "Обратился к ним, когда хотел продать свой автомобиль. Предварительно позвонил по телефону и узнал приблизительную стоимость за которую у меня купят автомобиль, которая меня вполне устроила. Приехали сами ко мне, все бумаги оформили достаточно быстро. И еще даже часа не прошло, как мне выдали деньги за автомобиль на руки и в полном объеме. Остался доволен.",
    },
  ];

  return (
    <section className={styles.container} data-image-index={3}>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>Примеры выкупленных автомобилей</h2>
      </div>
      <div className={styles.carouselContainer}>
        <div className={styles.carouselWrapper}>
          <CarBuyCarousel slides={arrData} />
        </div>
      </div>
    </section>
  );
};
