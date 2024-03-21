import Image from "next/image";

import styles from './styles.module.scss'
import Pizzas from "@/components/Pizzas/Pizzas";

export default function Home() {

  return (
    <main className={styles.main}>
      <Pizzas/>
    </main>
  );
}
