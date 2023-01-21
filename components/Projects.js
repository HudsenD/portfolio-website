import React from "react"
import doordashImg from "../public/projects/Doordashwebsite.png"
import ProjectItem from "./ProjectItem"
import portfolioImg from "../public/projects/portfolio.png"
import DexV2Img from "../public/projects/DexV2.png"
import LendingImg from "../public/projects/Lending.png"

const Projects = () => {
    return (
        <div className="w-full">
            <div className="max-w-[1240px] mx-auto px-2 py-16">
                <p className="mb-2 text-xl font-bold tracking-widest uppercase">Projects</p>
                <h2 className="mb-2">What I've Built</h2>
                <div className="grid gap-8 md:grid-cols-2">
                    <ProjectItem
                        title="Decentralized Doordash"
                        backgroundImg={doordashImg}
                        projectUrl="https://decentralized-doordash.vercel.app/"
                        githubUrl="https://github.com/HudsenD/Trustless-Doordash-Payments"
                        description="Full-stack, removes ability for Doordash to steal delivery driver tips"
                    />
                    <ProjectItem
                        title="Lending Protocol"
                        backgroundImg={LendingImg}
                        projectUrl=""
                        githubUrl="https://github.com/HudsenD/Lending-contract"
                        description="Allows users to take overcollateralized loans. Website coming soon"
                    />
                    <ProjectItem
                        title="Decentralized Exchange"
                        backgroundImg={DexV2Img}
                        projectUrl=""
                        githubUrl="https://github.com/HudsenD/LP-dex"
                        description="Allows users to trade between ERC-20 tokens. Website coming soon"
                    />
                    <ProjectItem
                        title="Portfolio Website"
                        backgroundImg={portfolioImg}
                        projectUrl="/"
                        githubUrl="https://github.com/HudsenD/portfolio-website"
                        description="Website that helps employers learn more about me"
                    />
                </div>
            </div>
        </div>
    )
}

export default Projects
