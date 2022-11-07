import React from "react"
// import {FaLinkedinIn} from react-icons/fa

const Contact = () => {
    return (
        <div className="w-full lg:h-screen">
            <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
                <p className="text-xl -tracking-widest uppercase text-[white]">Contact</p>
                <h2 className="py-4">Get in Touch</h2>
                <div className="grid gap-8 lg:grid-cols-5">
                    {/* left */}
                    <div className="w-full h-full col-span-3 p-4 shadow-xl lg:col-span-2 shadow-gray-400 rounded-xl">
                        <div className="h-full lg:p-4"></div>
                        <div>
                            <p>Connect With Me</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
