import { LinkedinLogo, GithubLogo, Envelope, Phone, ArrowUp, ArrowDown } from "phosphor-react";
import useWindowDimension from "./hooks/useWindowDimension";

function App() {
  const {width} = useWindowDimension();

  const getIconSize = () => {
    if (width) {
      
      if (width <= 640) return 28

      if (width <= 768) return 36;

      if (width <= 1024) return 40;

      if (width <= 1280) return 44;

    }

    return 48;
  }

  const iconSize = getIconSize();

  return (
    <div className="overflow-hidden">
      <div id="hi" className="bg-bg w-screen h-screen flex justify-center items-center">
        <div className=" bg-pgray w-11/12 h-[90%] p-24 shadow-lg flex flex-col relative">

  
        </div>
      </div>
      <div id="find-me" className="w-screen h-screen bg-lime-200 flex justify-center items-center">
        <div className=" bg-pgray w-11/12 h-[90%] p-24  shadow-lg relative grid grid-cols-2 gap-5">
          <div className="">
            {/* <h2 className="text-7xl md:text-6xl text-white font-title drop-shadow-md">onde me achar?</h2> */}
            <h2 className="text-7xl md:text-6xl text-white font-title drop-shadow-md">where can u find me?</h2>
            <div className="flex flex-col mt-10 gap-8">
                <a href="https://www.github.com/freitasDavi" target="_blank" className="flex items-center text-white gap-4 font-text text-3xl md:text-2xl hover:text-lime-200 max-w-xs" >
                  <GithubLogo size={iconSize} />
                  Github
                </a>
                <a href="https://linkedin.com/in/freitasDavi" target="_blank" className="flex items-center text-white gap-4 font-text text-3xl md:text-2xl hover:text-lime-200 max-w-xs" >
                  <LinkedinLogo size={iconSize} />
                  LinkedIn
                </a>
                <a href="mailto:davi.frrs@outlook.com" target="_blank" className="flex items-center text-white gap-4 font-text text-3xl md:text-2xl hover:text-lime-200 max-w-xs" >
                  <Envelope size={iconSize} />
                  Email
                </a>
                <a href="tel:+5548991308073" target="_blank" className="flex items-center text-white gap-4 font-text text-3xl md:text-2xl hover:text-lime-200 max-w-xs" >
                  <Phone size={iconSize} />
                  Phone
                </a>
            </div>
          
          </div>
          <div className="flex flex-col-reverse pr-4 pb-[2rem]">
            {/* <h2 className="text-7xl md:text-6xl text-white font-title drop-shadow-md">quem sou eu?</h2> */}
            <h2 className="text-7xl md:text-6xl text-white font-title drop-shadow-md mt-10">who am I?</h2>
            <div>
              <p className="text-white">I'm a 24 years old Brazilian full-stack developer, in love with front-end but who likes to develop back-end too</p>
              <p className="text-white">I'm very dedicated to my work and studies, I dream to publish a game and work for outside Brazil</p>
              <p className="text-white">In my free time, I love to spent time with my friends and family, play games and pratice sports</p>
            </div>
          </div>
          {/* Botões de Up and Down */}
          <div className="absolute bottom-12 right-12 flex flex-col gap-6">
            <a href="#hi" className="w-12 h-12 rounded-full bg-pink-400 flex items-center justify-center hover:bg-pink-600">
              <ArrowUp size={32} color="#fff" />
            </a>
            <a href="#hi" className="w-12 h-12 rounded-full flex items-center justify-center cursor-not-allowed bg-gray-500">
              <ArrowDown size={32} color="#fff" />
            </a>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default App
