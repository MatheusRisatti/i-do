/* eslint-disable jsx-a11y/alt-text */
import logo from '@/assets/img/logo.png'

export function Header() {
  return (
    <>
      <header className="w-full">
        <div className="flex w-full items-center justify-between">
          <img className="ml-8 w-40" src={logo} />

          <nav className="mr-8 mt-4 flex w-[800px] gap-10">
            <button className="font-vbs h-10 cursor-pointer border-none bg-transparent text-3xl text-white">
              Confirmar Presença
            </button>
            <button className="font-vbs h-10 cursor-pointer border-none bg-transparent text-3xl text-white">
              Sobre
            </button>
            <button className="font-vbs h-10 cursor-pointer border-none bg-transparent text-3xl text-white">
              Mensagem
            </button>
            <button className="font-vbs h-10 cursor-pointer border-none bg-transparent text-3xl text-white">
              Presentes
            </button>
            <button className="font-vbs h-10 cursor-pointer border-none bg-transparent text-3xl text-white">
              Local
            </button>
          </nav>
        </div>
      </header>
    </>
  )
}
