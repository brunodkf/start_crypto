import React from 'react'

const Footer = () => {
  return (
    <footer className=" text-zinc-200 py-10 mt-20">
      <div className="container w-full px-4 m-auto">
        
        <div className='text-center m-auto'>
          <h2 className="text-xl font-bold mb-2 font-exo2">StartCrypto</h2>
          <p className="text-sm text-zinc-400">
            Aprenda sobre o mercado de criptomoedas de forma simples, direta e segura.
          </p>
        </div>

      </div>

      <div className="mt-10 border-t border-zinc-700 pt-4 text-center text-sm text-zinc-500">
        © {new Date().getFullYear()} StartCrypto. Todos os direitos reservados.
        <br />
        <br />

        Desenvolvido por <a href='https://brunodkf.netlify.app/' target='_black' className="text-yellow-300 font-medium">Bruno Furtado</a>
      </div>
    </footer>
  )
}

export default Footer