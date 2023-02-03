function App() {

  return (
    <div className="bg-bg w-screen h-screen flex justify-center items-center">
      <div className=" bg-pgray w-11/12 h-[90%] p-24  shadow-lg">
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
      </div>
      {/* <div className="w-1/3 h-2/4 flex flex-col justify-end pl-20">
        
        <h4 className="text-sm">*essa foto aqui é só pra testar se ta pegando as imagens do lugar certo</h4>
      </div> */}
    </div>
  )
}

export default App
