import React from 'react'
import doordashImg from '../public/projects/Doordashwebsite.png'
import ProjectItem from './ProjectItem';
import portfolioImg from '../public/projects/portfolio.png'

const Projects = () => {
    return (
<div className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl font-bold tracking-widest uppercase'>Projects</p>
        <h2>What I've Built</h2>
        <div className='grid gap-8 md:grid-cols-2'>

           <ProjectItem title='Decentralized Doordash' backgroundImg={doordashImg} projectUrl='https://decentralized-doordash.vercel.app/' githubUrl='https://github.com/HudsenD/Trustless-Doordash-Payments' description='Solidity'/>

           <ProjectItem title='Subscription Manager' backgroundImg={doordashImg} projectUrl='/property' githubUrl='https://github.com/HudsenD/hardhat-subscription-manager-service' description='Solidity'/>

           <ProjectItem title='Portfolio Website' backgroundImg={portfolioImg} projectUrl='/' githubUrl='https://github.com/HudsenD/hardhat-subscription-manager-service' description='NextJS'/>

        </div>
        </div>
</div>
    );
};

export default Projects;


