import { MainInfo } from "@/widgets/mainInfo/ui/mainInfo";
import styles from "./page.module.scss";
import Header from "@/widgets/header/ui/header";
import WhyMe from "@/widgets/whyMe/ui/whyMe";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <MainInfo />
      <WhyMe />
    </main>
  );
}
