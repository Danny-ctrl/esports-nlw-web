import './styles/main.css';
import logoImg from './assets/logo-nlw-esports.svg';

function App() {
  return (
    <div className="max-w-[1344px] mx-auto flex-col flex items-center my-20">
      <img src={logoImg} alt="" />
      <h1 className="text-6xl text-white font-black mt-20">
        Seu <span className="bg-nlw-gradient">duo</span> está aqui</h1>
      <div className="grid grid-cols-6 gap-6">

      </div>
    </div>
  )
}

export default App
