import './styles/main.css'

import logoImg from './assets/logo-nlw-esports.png'

function App() {
  
  return (
    //se estiver no modo light, a div vai ser preta, se tiver no modo dark vai ser cinza
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt="logo nlw" />

      <h1 className="text-6xl text-white font-black mt-20">seu <span className="text-transparent bg-nlw-gradient bg-clip-text">duo</span> está aqui.</h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        <a href="">
          <img src="/game-1.png" alt="" />
        </a>
        <a href="">
          <img src="/game-2.png" alt="" />
        </a>
        <a href="">
          <img src="/game-3.png" alt="" />
        </a>
        <a href="">
          <img src="/game-4.png" alt="" />
        </a>
        <a href="">
          <img src="/game-5.png" alt="" />
        </a>
        <a href="">
          <img src="/game-6.png" alt="" />
        </a>
      </div>
    </div>
  )
}

export default App

