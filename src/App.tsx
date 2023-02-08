import { LinkedinLogo, GithubLogo, Envelope, Phone, ArrowUp, ArrowDown } from "phosphor-react";

function App() {
  return (
    <div className="overflow-hidden">
      <div id="hi" className="bg-bg w-screen h-screen flex justify-center items-center">
        <div className=" bg-pgray w-11/12 h-[90%] p-24  shadow-lg relative">
          <div className="flex gap-12 justify-evenly">
            <div className="pt-[10rem]">
              <h2 className="text-7xl text-white font-title drop-shadow-md">oi!</h2>
              <h2 className="text-7xl text-white font-title drop-shadow-md ">sou  Davi,</h2>
              <h2 className="text-7xl text-white font-title drop-shadow-md ">desenvolvedor</h2>
            </div>
            <img src="./lightning.svg" className="w-80 pt-[6rem]" alt="lightning" />
            <div className="pt-[8rem]">
              <img src="/github.jfif" alt="eu" className="w-80 h-80 rounded-full border-4 border-white drop-shadow-lg" />
            </div>
          </div>
          

          <div className="mt-20 flex flex-col w-1/3 pl-24">
            <h4 className="text-2xl text-white inline hover:underline cursor-pointer">projetos</h4>
            <h4 className="text-2xl text-white inline hover:underline cursor-pointer">sobre</h4>
            <h4 className="text-2xl text-white inline hover:underline cursor-pointer">contato</h4>
          </div>

        {/* Botões de Up and Down */}
        <div className="absolute bottom-12 right-12 flex flex-col gap-6">
          <a href="#find-me" className="w-12 h-12 rounded-full flex items-center justify-center bg-lime-200 hover:bg-lime-400">
            <ArrowDown size={32} color="#5a5a5a" />
          </a>
        </div>
        </div>
        {/* <div className="w-1/3 h-2/4 flex flex-col justify-end pl-20">
          
          <h4 className="text-sm">*essa foto aqui é só pra testar se ta pegando as imagens do lugar certo</h4>
        </div> */}
      </div>
      <div id="find-me" className="w-screen h-screen bg-lime-200 flex justify-center items-center">
        <div className=" bg-pgray w-11/12 h-[90%] p-24  shadow-lg relative">
          <h2 className="text-7xl text-white font-title drop-shadow-md">onde me achar?</h2>
          <div className="flex flex-col mt-10 gap-8">
              <a href="https://www.github.com/freitasDavi" target="_blank" className="flex items-center text-white gap-4 font-text text-3xl hover:text-lime-200 max-w-xs" >
                <GithubLogo size={48} />
                Github
              </a>
              <a href="https://linkedin.com/in/freitasDavi" target="_blank" className="flex items-center text-white gap-4 font-text text-3xl hover:text-lime-200 max-w-xs" >
                <LinkedinLogo size={48} />
                LinkedIn
              </a>
              <a href="mailto:davi.frrs@outlook.com" target="_blank" className="flex items-center text-white gap-4 font-text text-3xl hover:text-lime-200 max-w-xs" >
                <Envelope size={48} />
                Email
              </a>
              <a href="tel:+5548991308073" target="_blank" className="flex items-center text-white gap-4 font-text text-3xl hover:text-lime-200 max-w-xs" >
                <Phone size={48} />
                Phone
              </a>
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
