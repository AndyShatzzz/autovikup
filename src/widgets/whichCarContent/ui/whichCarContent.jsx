import React from "react";
import styles from "./whichCarContent.module.scss";
import Image from "next/image";
import whcar1 from "../image/whcar1.webp";
import whcar2 from "../image/whcar2.webp";
import whcar3 from "../image/whcar3.webp";
import whcar4 from "../image/whcar4.webp";
import whcar5 from "../image/whcar5.webp";
import whcar6 from "../image/whcar6.webp";

export const WhichCarContent = () => {
  const arrData = [
    {
      image: whcar6,
      subtitle: "Выкуп авто эконом-класса в Липецке",
      alt: "Выкуп авто эконом-класса в Липецке и Липецкой области",
      text: "Срочно купим автомобили эконом-сегмента (Renault Logan, Kia Rio, Hyundai Solaris) по цене выше рынка. Деньги сразу наличными или переводом",
      schema: {
        "@type": "Offer",
        category: "Damaged vehicles",
        itemCondition: "DamagedCondition",
        areaServed: {
          "@type": "City",
          name: "Липецк",
          containsPlace: {
            "@type": "Place",
            name: "Липецкая область",
          },
        },
      },
    },
    {
      image: whcar5,
      subtitle: "Выкуп отечественных автомобилей",
      alt: "Выкуп отечественных автомобилей в Липецке и Липецкой области",
      text: "Продайте ВАЗ, Lada, ГАЗ, УАЗ любого года выпуска — даже неходовые и аварийные. Бесплатный эвакуатор при необходимости",
      schema: {
        "@type": "Offer",
        areaServed: ["Липецк", "Липецкая область"],
      },
    },
    {
      image: whcar1,
      subtitle: "Выкуп новых авто и с пробегом",
      alt: "Выкуп новых авто и с пробегом в Липецке и Липецкой области",
      text: "Покупаем подержанные автомобили после 1 владельца и новые машины из салона. Оценка по VIN без осмотра",
      schema: {
        "@type": "Offer",
        areaServed: {
          "@type": "AdministrativeArea",
          name: "Липецкая область",
          containsPlace: {
            "@type": "City",
            name: "Липецк",
          },
        },
      },
    },
    {
      image: whcar2,
      subtitle: "Кредитные и залоговые авто",
      alt: "Выкуп кредитных и залоговых авто в Липецке и Липецкой области",
      text: "Решение проблем с банками: выкупаем машины с непогашенными кредитами, залогами и ограничениями. Помощь в закрытии договора",
      schema: {
        "@type": "Offer",
        serviceArea: {
          "@type": "AdministrativeArea",
          name: "Липецкая область",
        },
      },
    },
    {
      image: whcar3,
      subtitle: "Выкуп битых авто после ДТП",
      alt: "Выкуп битых авто после ДТП в Липецке и Липецкой области",
      text: "Примем автомобили после аварии с деформированной рамой, подушками безопасности",
      schema: {
        "@type": "Offer",
        availableAtOrFrom: {
          "@type": "Place",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Липецк",
            addressRegion: "Липецкая область",
          },
        },
      },
    },
    {
      image: whcar4,
      subtitle: "Авто с юридическими проблемами",
      alt: "Авто с юридическими проблемами в Липецке и Липецкой области",
      text: "Продайте машину с запретом на регистрационные действия, арестом или без ПТС. Легальный выкуп с полным пакетом документов",
      schema: {
        "@type": "Offer",
        areaServed: [
          {
            "@type": "City",
            name: "Липецк",
          },
          {
            "@type": "AdministrativeArea",
            name: "Липецкая область",
          },
        ],
      },
    },
  ];

  return (
    <section
      className={styles.contentContainer}
      aria-label="Услуги по выкупу автомобилей"
    >
      <div className={styles.gridContainer} role="list">
        {arrData.map((item, i) => (
          <article
            className={styles.gridItem}
            key={i}
            role="listitem"
            itemScope
            itemType="http://schema.org/Offer"
          >
            <Image
              className={styles.image}
              src={item.image}
              alt={item.alt}
              itemProp="image"
              priority={i < 3}
            />
            <h3 className={styles.subtitle} itemProp="name">
              {item.subtitle}
            </h3>
            <p className={styles.text} itemProp="description">
              {item.text}
            </p>
            <meta itemProp="priceRange" content="Высокая цена" />
            <meta itemProp="areaServed" content="Липецк и Липецкая область" />
          </article>
        ))}
      </div>
    </section>
  );
};
