"use client";
import React, { useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useAutoplay } from "../autoplayButton/autoplayButton";
import { useAutoplayProgress } from "../autoplayProgress/autoplayProgress";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "../arrowButtons/arrowButtons";
import "./carBuyCarousel.css";
import Image from "next/image";
import styles from "./carBuyCarousel.module.scss";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";

export const CarBuyCarousel = (props) => {
  const { slides, options = { loop: true } } = props;
  const progressNode = useRef(null);
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ playOnInit: true, delay: 5000 }),
  ]);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const { autoplayIsPlaying, toggleAutoplay, onAutoplayButtonClick } =
    useAutoplay(emblaApi);

  const { showAutoplayProgress } = useAutoplayProgress(emblaApi, progressNode);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((item, index) => (
            <div className="embla__slide" key={index}>
              <div className={styles.container}>
                <Image
                  className={styles.image}
                  src={item.img}
                  alt="Изображение автомобиля"
                />
                <h3 className={styles.subtitle}>{item.subtitle1}</h3>
                <h3 className={styles.subtitle}>{item.subtitle2}</h3>
                <h3 className={styles.subtitle}>
                  Цена выкупа: {item.price} рублей
                </h3>
                <p className={styles.text}>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton
            onClick={() => onAutoplayButtonClick(onPrevButtonClick)}
            disabled={prevBtnDisabled}
          />
          <NextButton
            onClick={() => onAutoplayButtonClick(onNextButtonClick)}
            disabled={nextBtnDisabled}
          />
        </div>

        <div
          className={`embla__progress`.concat(
            showAutoplayProgress ? "" : " embla__progress--hidden"
          )}
        >
          <div className="embla__progress__bar" ref={progressNode} />
        </div>

        <button className="embla__play" onClick={toggleAutoplay} type="button">
          {autoplayIsPlaying ? <PauseIcon /> : <PlayArrowIcon />}
        </button>
      </div>
    </div>
  );
};
