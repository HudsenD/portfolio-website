import React from "react"
import doordashImg from "../public/projects/Doordashwebsite.png"
import ProjectItem from "./ProjectItem"
import portfolioImg from "../public/projects/portfolio.png"
import LendingImg from "../public/projects/Lending.png"
import SolventSwap from "../public/projects/SolventSwap2.png"
import ChainTrust from "../public/projects/chaintrust2.png"

const Projects = () => {
    return (
        <div className="w-full">
            <div className="max-w-[1240px] mx-auto px-2 py-16">
                <p className="mb-2 text-xl font-bold tracking-widest uppercase">Projects</p>
                <h2 className="mb-2">What I've Built</h2>
                <div className="grid gap-8 md:grid-cols-2">
                    <ProjectItem
                        title="ChainTrust"
                        backgroundImg={ChainTrust}
                        projectUrl="https://chaintrust-frontend-cay1.vercel.app/"
                        githubUrl="https://github.com/HudsenD/chaintrust-contracts"
                        description="Simplify wealth management with Trust Funds utilizing ERC-6551"
                    />
                    <ProjectItem
                        title="SolventSwap"
                        backgroundImg={SolventSwap}
                        projectUrl="https://solventswap.vercel.app/"
                        githubUrl="https://github.com/HudsenD/LP-dex-frontend"
                        description="Enables users to create liquidity pools and trade between ERC-20 tokens"
                    />
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
                    {/* <ProjectItem
                        title="Portfolio Website"
                        backgroundImg={portfolioImg}
                        projectUrl="/"
                        githubUrl="https://github.com/HudsenD/portfolio-website"
                        description="Website that helps employers learn more about me"
                    /> */}
                </div>
            </div>
        </div>
    )
}

export default Projects
