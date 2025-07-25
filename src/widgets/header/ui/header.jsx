"use client";
import styles from "./header.module.scss";
import { useEffect, useState } from "react";
import { Avatar, IconButton, SpeedDial } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";
import PhoneForwardedIcon from "@mui/icons-material/PhoneForwarded";
import { FeedBackPopup } from "@/widgets/feedBackPopup/ui/feedBackPopup";

export default function Header() {
  const [headClass, setHeadClass] = useState(styles.header);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuStyle, setMenuStyle] = useState(styles.linksContainer);
  const [wrapperStyle, setWrapperStyle] = useState(styles.opacityWrapper);
  const [isOpenModal, setIsOpenModal] = useState(false);
  // const [showWrapper, setShowWrapper] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      // setShowWrapper(width < 930 && width > 630);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", (evt) => {
      if (window.scrollY > 30) {
        setHeadClass(styles.headerSticky);
      } else {
        setHeadClass(styles.header);
      }
    });
  });

  const handleOpenMenu = () => {
    if (window.scrollY > 30) {
      setWrapperStyle(styles.opacityWrapperStikyActive);
    } else {
      setWrapperStyle(styles.opacityWrapperActive);
    }
    setMenuStyle(styles.linksContainerOpen);
    setIsMenuOpen(true);
  };

  const handleCloseMenu = () => {
    if (window.scrollY > 30) {
      setHeadClass(styles.headerSticky);
    } else {
      setHeadClass(styles.header);
    }
    setMenuStyle(styles.linksContainer);
    setWrapperStyle(styles.opacityWrapper);
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className={headClass}>
        <div className={wrapperStyle}></div>
        <div className={styles.container}>
          <Link href="/" className={styles.link}>
            <span className={styles.logo}>АВТО</span>
            <span className={styles.logoText}>ВЫКУП 48</span>
          </Link>
          <div className={menuStyle}>
            <Link
              href="/#whyMe"
              className={styles.links}
              onClick={handleCloseMenu}
            >
              О нас
            </Link>
            <Link
              href="/#whichCar"
              className={styles.links}
              onClick={handleCloseMenu}
            >
              Какие авто выкупаем
            </Link>
            <Link
              href="#whatCarBuy"
              className={styles.links}
              onClick={handleCloseMenu}
            >
              Выкупленные авто
            </Link>
            <Link
              href="#stageOfBuy"
              className={styles.links}
              onClick={handleCloseMenu}
            >
              Процедура выкупа
            </Link>
            <div className={styles.containerFeedback}>
              <a className={styles.linkPhone} href="tel:+79935854393">
                +7(993) 585-43-93
              </a>
              <div className={styles.socials}>
                <a
                  className={styles.linkSocial}
                  href="https://wa.me/79935854393"
                  target="blank"
                >
                  <Avatar
                    sx={{ width: "45px", height: "45px", bgcolor: "#2cb742" }}
                  >
                    <WhatsAppIcon sx={{ width: "28px", height: "28px" }} />
                  </Avatar>
                </a>
                <a
                  className={styles.linkSocial}
                  href="https://t.me/RulonOboev48"
                  target="blank"
                >
                  <Avatar
                    sx={{ width: "45px", height: "45px", bgcolor: "#27a7e7" }}
                  >
                    <TelegramIcon sx={{ width: "28px", height: "28px" }} />
                  </Avatar>
                </a>
              </div>
            </div>
          </div>
          {!isMenuOpen && (
            <IconButton
              sx={{ margin: 0, padding: 0 }}
              className={styles.menuButton}
              onClick={handleOpenMenu}
            >
              <MenuIcon sx={{ color: "#fff", width: "32px", height: "32px" }} />
            </IconButton>
          )}
          {isMenuOpen && (
            <IconButton className={styles.menuButton} onClick={handleCloseMenu}>
              <CloseIcon
                sx={{ color: "#fff", width: "32px", height: "32px" }}
              />
            </IconButton>
          )}
        </div>
      </header>
      <SpeedDial
        className={styles.speedDeal}
        ariaLabel="social-media"
        sx={{
          position: "fixed",
          bottom: "50px",
          right: "50px",
        }}
        title="Заказать звонок"
        icon={<PhoneForwardedIcon />}
        onClick={() => setIsOpenModal(true)}
      ></SpeedDial>
      {isOpenModal && (
        <FeedBackPopup
          isOpenModal={isOpenModal}
          setIsOpenModal={setIsOpenModal}
        />
      )}
    </>
  );
}
