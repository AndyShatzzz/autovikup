import React from "react";
import styles from "./stageOfBuy.module.scss";
import TouchAppIcon from "@mui/icons-material/TouchApp";
import SearchIcon from "@mui/icons-material/Search";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import CurrencyRubleIcon from "@mui/icons-material/CurrencyRuble";

export const StageOfBuy = () => {
  return (
    <section id="stageOfBuy" className={styles.container}>
      <div className={styles.contentContainer}>
        <h2 className={styles.title}>Порядок выкупа автомобиля</h2>
        <div className={styles.iconsContainer}>
          <div className={styles.iconsItem}>
            <h3 className={styles.subtitleContainer}>1 этап</h3>
            <div className={styles.topContainer}>
              <div className={styles.svgContainer}>
                <TouchAppIcon className={styles.svgImg} />
              </div>
              <h4 className={styles.timeDuration}>5 минут</h4>
            </div>
            <div className={styles.stageContainer}>
              <h3 className={styles.stageTitle}>Оставить заявку</h3>
              <p className={styles.stageText}>
                Оставьте заявку на сайте или позвоните нам по номеру +7(900)
                598-43-33
              </p>
            </div>
          </div>
          <div className={styles.iconsItem}>
            <h3 className={styles.subtitleContainer}>2 этап</h3>
            <div className={styles.topContainer}>
              <div className={styles.svgContainer}>
                <SearchIcon className={styles.svgImg} />
              </div>
              <h4 className={styles.timeDuration}>30 минут</h4>
            </div>
            <div className={styles.stageContainer}>
              <h3 className={styles.stageTitle}>Техническая диагностика</h3>
              <p className={styles.stageText}>
                Мы бесплатно оценим и проведем детальную техническую
                диагностику, проверим юридическую чистоту
              </p>
            </div>
          </div>
          <div className={styles.iconsItem}>
            <h3 className={styles.subtitleContainer}>3 этап</h3>
            <div className={styles.topContainer}>
              <div className={styles.svgContainer}>
                <ReceiptLongIcon className={styles.svgImg} />
              </div>
              <h4 className={styles.timeDuration}>10 минут</h4>
            </div>
            <div className={styles.stageContainer}>
              <h3 className={styles.stageTitle}>Оформление документов</h3>
              <p className={styles.stageText}>
                Возьмем на себя оформление полного пакета документов для выкупа
                вашего авто
              </p>
            </div>
          </div>
          <div className={styles.iconsItem}>
            <h3
              className={`${styles.subtitleContainer} ${styles.iconsItemFinally}`}
            >
              Финальный этап
            </h3>
            <div className={styles.topContainer}>
              <div className={styles.svgContainer}>
                <CurrencyRubleIcon className={styles.svgImg} />
              </div>
              <h4 className={styles.timeDuration}>5 минут</h4>
            </div>
            <div className={styles.stageContainer}>
              <h3 className={styles.stageTitle}>Получение выплаты</h3>
              <p className={styles.stageText}>
                Вы получите максимальную выплату за свое авто любым удобным для
                Вас способом
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
