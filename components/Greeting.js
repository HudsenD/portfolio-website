import Image from "next/image"
import React from "react"
import hudsenImg from "../public/projects/HDCrop.jpg"
import Link from "next/link"

const Greeting = () => {
    return (
        <div className="max-w-[1240px] justify-center w-full h-auto shadow-xl shadow-gray-400 rounded-xl mx-auto py-10 bg-white">
            <div className="max-w-[1240px] mx-auto px-28 py-5 grid md:grid-cols-2 gap-1">
                <div className="relative flex w-48 h-48 overflow-hidden rounded-full">
                    <Image src={hudsenImg} layout="fill" objectFit="cover" alt="Picture of Hudsen" priority />
                </div>
                <div className="py-8">
                    <h1 className="text-4xl font-bold text-center ">Hi, I'm Hudsen Durst</h1>
                    <h2 className="p-2 font-mono text-xl font-bold text-center">Software Developer</h2>

                    <div className="grid gap-1 md:grid-cols-2">
                        <Link href={"https://www.linkedin.com/in/hudsen-durst-465407208/"}>
                            <p className="py-3 text-lg font-bold text-center text-white bg-black rounded-lg shadow-lg cursor-pointer shadow-gray-400">
                                LinkedIn
                            </p>
                        </Link>
                        <Link href={"https://github.com/HudsenD"}>
                            <p className="py-3 text-lg font-bold text-center text-white bg-black rounded-lg shadow-lg cursor-pointer shadow-gray-400">
                                Github
                            </p>
                        </Link>
                    </div>
                    <p className="mt-3 font-mono text-sm font-semibold text-center">hudsendurst@proton.me</p>
                </div>
            </div>
        </div>
    )
}

export default Greeting
