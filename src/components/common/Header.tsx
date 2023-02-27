
import {Link as Scroll} from "react-scroll"
import ReactIcon from "./ReactIcon"
import ViteIcon from "./ViteIcon"
export default () => {
 
    return (
        <div className="bg-indigo-200 h-screen grid place-items-center">
            <section className="max-w-screen-xl  px-4 items-center lg:flex md:px-8">
                <div className="space-y-4 flex-1 sm:text-center lg:text-left">
                    <h1 className="text-white font-bold text-3xl xl:text-5xl">
                        Vite + React ... 
                        <span className="text-indigo-400"> 😘</span>
                    </h1>
                    <p className="text-gray-300 max-w-xl leading-relaxed sm:mx-auto lg:ml-0">
                        Simple Starter template use Vite, React, Mobx and Geopify geocoding Api
                    </p>
                    <div className="pt-10 items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start">
                        <Scroll to="to-visit" smooth>
                          <a className="px-7 py-3 w-full bg-white text-gray-800 text-center rounded-md shadow-md block sm:w-auto">
                            Get started
                        </a>
                        </Scroll>
                        <a href="/map" className="px-7 py-3 w-full bg-white text-gray-800 text-center rounded-md shadow-md block sm:w-auto">
                             Try It
                        </a>
                    </div>
                </div>
                <div className="flex-1 text-center mt-7 lg:mt-0 lg:ml-3 flex">
                  <div className="max-w-xs">
                  <ViteIcon></ViteIcon>
                  </div>
                  <div className="max-w-xs">
                  <ReactIcon></ReactIcon>  
                  </div>
                  
                  
                </div>
            </section>
        </div>
    )
}
