import React from "react";
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare
} from 'react-icons/fa'

const Footer = () => {
    return(
        <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
            <div>
                <h1 className="w-full text-3xl font-bold text-[#00df9a]">
                    REACT.
                </h1>
                <p className="py-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit, Voluptatum 
                    molestiae delectus culpa hic assumenda, voluptate reprehenerit
                    dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit, eveniet ex deserunt fuga?
                </p>
                <div className="flex md:w-[75%] my-6 justify-between">
                    <FaFacebookSquare  size={30}/>
                    <FaInstagram size={30}/>
                    <FaTwitterSquare size={30}/>
                    <FaGithubSquare size={30}/>
                    <FaDribbbleSquare size={30}/>
                </div>
            </div>
            <div className="lg:col-span-2 flex justify-between mt-6">
                <div>
                    <h6 className="font-medium text-[#00df9a]">Solutions</h6>
                    <ul>
                        <li className="py-2 text-sm">Analytics</li>
                        <li className="py-2 text-sm">Marketing</li>
                        <li className="py-2 text-sm">Commerce</li>
                        <li className="py-2 text-sm">Inshights</li>
                    </ul>
                </div>
                <div>
                    <h6 className="font-medium text-[#00df9a]">Support</h6>
                    <ul>
                        <li className="py-2 text-sm">Pricing</li>
                        <li className="py-2 text-sm">Documents</li>
                        <li className="py-2 text-sm">Guids</li>
                        <li className="py-2 text-sm">Status</li>
                    </ul>
                </div>
                <div>
                    <h6 className="font-medium text-[#00df9a]">Company</h6>
                    <ul>
                        <li className="py-2 text-sm">About</li>
                        <li className="py-2 text-sm">Jobs</li>
                        <li className="py-2 text-sm">Press</li>
                        <li className="py-2 text-sm">Carrers</li>
                    </ul>
                </div>
                <div className="md:pr-8">
                    <h6 className="font-medium text-[#00df9a]">Legal</h6>
                    <ul>
                        <li className="py-2 text-sm">Claim</li>
                        <li className="py-2 text-sm">Policy</li>
                        <li className="py-2 text-sm">Terms</li>
                    </ul>
                </div>
            </div>
            
        </div>
    )
}

export default Footer;