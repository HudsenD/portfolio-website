import Head from "next/head"
import Image from "next/image"
import AboutMe from "../components/AboutMe"
import Background from "../components/Background"
import NavBar from "../components/NavBar"
import Projects from "../components/Projects"
import styles from "../styles/Home.module.css"
import bgImg from "../public/projects/codeBG.jpg"

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Portfolio App</title>
                <meta name="description" content="Hudsen's Portfolio" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <NavBar />
                <Projects />
                <AboutMe />
            </div>
        </div>
    )
}
