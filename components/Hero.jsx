import React from "react";
import { ReactTyped } from "react-typed";
import ReactTypingEffect from 'react-typing-effect';


const Hero = () =>{
    const text1 = "chuj";
    console.log(text1);
    console.log(text1.split(''));
    return(
        <div className="text-white">
            <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
                <p className="text-[#00df9a] md:text-3xl sm:text-2xl text-xl font-bold p-2">GROWIN WITH DATA ANALYTICS</p>
                <h1 className="md:text-7xl sm:text-5xl text-4xl font-bold md:py-4">Grow with data.</h1>
                <div className="flex justify-center items-center ">
                    <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">Fast, flexible, financing for</p>
                    <ReactTyped
                        className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
                         strings={['BTB', 'BTC', 'SASS']}
                            typeSpeed={120}
                            backSpeed={140}
                            loop
                    />
                    <br />
                </div>
                <ReactTypingEffect className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 text-white'
                loop
                speed={120}
                typingDelay={200}
                eraseSpeed={140}
                eraseDelay={550}
        text={["Hello.", "Customer!!"]}
        displayTextRenderer={(text) => {
          return (
            <h1>
              {text.split('').map((litera, i) => {
                const key = `${i}`;
                return (
                  <span
                    key={key}
                    style={i%2 === 0 ? { color: '#00df9a'} : {}}
                  >{litera}</span>
                );
              })}
            </h1>
          );
        }} 
        />
                <p className="md:text-2xl text-xl font-bold text-gray-500 px-4">Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms.</p>
                <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">Get Started</button>
            </div>
        </div>
    )
}

export default Hero;