import styles from "./index.module.css"
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Projects } from "@/components/projects";

export default function Page() {
  return (
    <main className={styles.main}>
      <Hero />
      <About />
      <Projects />
    </main>
  )
}
