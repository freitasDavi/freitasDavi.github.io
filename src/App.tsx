function App() {

  return (
    <div className="bg-teal-400 w-screen h-screen flex">
      <div className="w-1/3 h-2/4 flex flex-col justify-end pl-20">
        <h2 className="text-7xl text-white font-title drop-shadow-md">oi!</h2>
        <h2 className="text-7xl text-white font-title drop-shadow-md">sou  Davi,</h2>
        <h2 className="text-7xl text-white font-title drop-shadow-md">desenvolvedor</h2>
        <h4 className="text-sm">*essa foto aqui é só pra testar se ta pegando as imagens do lugar certo</h4>
        <img src="/github.jfif" alt="eu" className="w-64 h-64 rounded-full border-2 border-white drop-shadow-lg" />
      </div>
    </div>
  )
}

export default App
