import { MainInfo } from "@/widgets/mainInfo/ui/mainInfo";
import styles from "./page.module.scss";
import Header from "@/widgets/header/ui/header";
import WhyMe from "@/widgets/whyMe/ui/whyMe";
import { WhichCar } from "@/widgets/whichCar/ui/whichCar";
import img1 from "@/shared/images/bg1.webp";
import img2 from "@/shared/images/bg2.webp";
import img3 from "@/shared/images/bg3.webp";
import img5 from "@/shared/images/bg5.webp";
import img6 from "@/shared/images/bg6.webp";
import { BgWrapper } from "@/widgets/bgWrapper/ui/bgWrapper";
import { CarPriceMessenger } from "@/widgets/carPriceMessenger/ui/carPriceMessenger";
import { WhichCarContent } from "@/widgets/whichCarContent/ui/whichCarContent";
import { CarPriceContent } from "@/widgets/carPriceContent/ui/carPriceContent";
import { WhatCarBuy } from "@/widgets/WhatCarBuy/ui/WhatCarBuy";
import { StageOfBuy } from "@/widgets/stageOfBuy/ui/stageOfBuy";
import { HaveQuestion } from "@/widgets/haveQuestion/ui/haveQuestion";
import { WhatDocuments } from "@/widgets/whatDocuments/ui/whatDocuments";
import { Footer } from "@/widgets/footer/ui/footer";

export default function Home() {
  const backgroundImages = [img1, img2, img3, img5, img6];
  return (
    <main className={styles.main}>
      <BgWrapper images={backgroundImages}>
        <Header />
        <MainInfo data-image-index={0} />
        <WhyMe />
        <WhichCar data-image-index={1} />
        <WhichCarContent />
        <CarPriceMessenger data-image-index={2} />
        <CarPriceContent />
        <WhatCarBuy data-image-index={3} />
        <StageOfBuy />
        <HaveQuestion />
        <WhatDocuments />
        <Footer data-image-index={4} />
      </BgWrapper>
    </main>
  );
}
