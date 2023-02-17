import { LinkedinLogo, GithubLogo, Envelope, Phone, ArrowUp, ArrowDown } from "phosphor-react";
import useWindowDimension from "./hooks/useWindowDimension";
import languages from "../data.json";

function App() {
  const {width} = useWindowDimension();
  const { data } = languages;

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
        <div className=" bg-pgray w-11/12 h-[90%] p-24 shadow-lg flex justify-between relative">
          <div className="flex flex-col gap-16">
              <div className="">
                <h2 className="text-7xl text-white font-title drop-shadow-md">hi!</h2>
                <h2 className="text-7xl text-white font-title drop-shadow-md ">I'm  Davi,</h2>
                <h2 className="text-7xl text-white font-title drop-shadow-md ">developer</h2>
              </div>
              <div className="flex flex-col w-1/3">
                <a href="#"><h4 className="text-2xl text-white inline hover:underline cursor-pointer">about</h4></a>
                <a href="#"><h4 className="text-2xl text-white inline hover:underline cursor-pointer">projects</h4></a>
                <a href="#"><h4 className="text-2xl text-white inline hover:underline cursor-pointer">skills</h4></a>
              </div>
          </div>
          <div className="flex justify-between flex-1 pl-28">
            <img src="./lightning.svg" className="w-80 pt-[6rem]" alt="lightning" />
            <div className="pt-[8rem]">
              <img src="/github.jfif" alt="eu" className="w-80 h-80 md:w-40 md:h-40 object-cover rounded-full border-4 border-white drop-shadow-lg" />
            </div>
          </div>
          {/* Botões de Up and Down */}
          <div className="absolute bottom-12 right-12 flex flex-col gap-6">
            <a href="#find-me" className="w-12 h-12 rounded-full flex items-center justify-center cursor-pointer bg-lime-300 text-gray-500 hover:bg-lime-500 hover:text-white">
              <ArrowDown size={32} />
            </a>
          </div>
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
      <div id="skills" className="w-screen h-screen bg-lightin-pink flex justify-center items-center">
        <div className=" bg-pgray w-11/12 h-[90%] p-16 shadow-lg flex flex-col gap-10 relative">
          <h2 className="text-7xl md:text-6xl text-white font-title drop-shadow-md">Skills</h2>
          <div className="grid grid-cols-2">
            { data.map(language => {
              return (
                <div key={language.nome} className="flex gap-3 items-center">
                  <img className="w-36" src={language.nomeImagem} alt={language.nome} />
                  <div className="w-full">
                    <h3 className="text-xl text-white">{language.nome}</h3>
                    <h4 className="text-base">{language.descricao}</h4>
                  </div>
                </div>
              )
            }) }
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
