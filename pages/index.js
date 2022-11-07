import Head from "next/head"
import AboutMe from "../components/AboutMe"
import Greeting from "../components/Greeting"
import Projects from "../components/Projects"
import styles from "../styles/Home.module.css"

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Portfolio App</title>
                <meta name="description" content="Hudsen's Portfolio" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <Greeting />
                <Projects />
                <AboutMe />
            </div>
        </div>
    )
}
