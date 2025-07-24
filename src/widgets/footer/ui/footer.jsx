import React from "react";
import styles from "./footer.module.scss";
import Link from "next/link";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import { Avatar } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";

export const Footer = () => {
  return (
    <section className={styles.container} data-image-index={4}>
      <div className={styles.contentContainer}>
        <Link href="/" className={styles.link}>
          <span className={styles.logo}>АВТО</span>
          <span className={styles.logoText}>ВЫКУП 48</span>
        </Link>
        <div className={styles.socialsContainer}>
          <div className={styles.socialWrapper}>
            <h3 className={styles.subtitle}>Контакты</h3>
            <div className={styles.socialLink}>
              <PhoneIcon width="32px" height="32px" sx={{ color: "white" }} />
              <a
                className={styles.phNumber}
                target="blank"
                href="tel:+79005984333"
              >
                +7(900) 598-43-33
              </a>
              <div className={styles.socialLink}>
                <EmailIcon width="32px" height="32px" sx={{ color: "white" }} />
                <a
                  className={styles.phNumber}
                  href="mailto:VIKUPAVTO48@MAIL.RU"
                  target="blank"
                >
                  VIKUPAVTO48@MAIL.RU
                </a>
              </div>

              <div className={styles.socialLinkMessengers}>
                <div className={styles.socialLinkMessengersItemText}>
                  <h3 className={styles.socialsMessengersSubtitle}>
                    Задайте вопрос
                  </h3>
                  <p className={styles.socialsMessengersText}>
                    Напишите в любой из мессенджеров
                  </p>
                </div>
                <div className={styles.socialLinkMessengersItemLink}>
                  <a
                    className={styles.linkLogoMessengers}
                    href="https://wa.me/79205206969"
                    target="blank"
                  >
                    <Avatar
                      sx={{ width: "48px", height: "48px", bgcolor: "#2cb742" }}
                    >
                      <WhatsAppIcon sx={{ width: "30px", height: "30px" }} />
                    </Avatar>
                  </a>
                  <a
                    className={styles.linkLogoMessengers}
                    href="https://t.me/ilusha_tarasov"
                    target="blank"
                  >
                    <Avatar
                      sx={{ width: "48px", height: "48px", bgcolor: "#27a7e7" }}
                    >
                      <TelegramIcon sx={{ width: "30px", height: "30px" }} />
                    </Avatar>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.socialWrapper}>
            <h3 className={styles.subtitle}>О компании</h3>
            <Link href="/#whyMe" className={styles.links}>
              О нас
            </Link>
            <Link href="/#whichCar" className={styles.links}>
              Какие авто выкупаем
            </Link>
            <Link href="#carPrice" className={styles.links}>
              Оценка авто в мессенджерах
            </Link>
            <Link href="#whatCarBuy" className={styles.links}>
              Выкупленные авто
            </Link>
            <Link href="#carFeedback" className={styles.links}>
              Оставить отзыв
            </Link>
            <Link href="#stageOfBuy" className={styles.links}>
              Порядок выкупа авто
            </Link>
            <Link href="#whatDocuments" className={styles.links}>
              Необходимые документы
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
