import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { FaCheckCircle, FaClock, FaUserSecret } from "react-icons/fa";
import { FaShield } from "react-icons/fa6";
import { FiZap } from "react-icons/fi";


export default function CryptoVSLLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#041832] to-[#01080e]">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-yellow-500/10 text-yellow-500 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-yellow-500/20">
            <FiZap className="w-4 h-4" />
            Método Validado por +1.200 Alunos
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Descubra como <span className="text-yellow-500">lucrar com criptomoedas</span> mesmo começando do zero
          </h1>

          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Aprenda o método validado que está mudando vidas e transformando iniciantes em investidores lucrativos
          </p>
        </div>

        {/* Video Section */}
        <div className="relative mb-8">
          <div className="aspect-video bg-slate-900 rounded-2xl overflow-hidden shadow-2xl">
            <video
              className="w-full h-full object-cover"
              controls
              autoPlay
              // muted
              playsInline
              poster="/placeholder.svg?height=400&width=800"
            >
              <source src="/vsl.mp4" type="video/mp4" />
              Seu navegador não suporta vídeo.
            </video>
          </div>

          {/* Video overlay elements */}
          <div className="absolute -top-4 -right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">
            NÃO PERCA
          </div>
        </div>

        {/* Main CTA */}
        <div className="text-center mb-12">
          {/* <Button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-6 text-md md:text-xl font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
          >
            🚀 Quero Garantir Minha Vaga com Desconto
          </Button> */}

          <Link href={"https://pay.kiwify.com.br/VcRA5uz"}
            className="w-full block bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-2 text-md md:text-xl font-bold rounded-md shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer">
            🚀 Quero Garantir Minha Vaga com Desconto
          </Link>

          <p className="text-sm text-slate-400 mt-3">⚡ Acesso imediato após a compra</p>
        </div>

        {/* Benefits Section */}
        <Card className="mb-12 border-0 shadow-lg bg-white/5 backdrop-blur-sm border border-white/10">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-center mb-8 text-white">O que você vai conseguir:</h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-start gap-4 relative">
                <div className="absolute left-0 top-0 w-0.5 h-full bg-yellow-500 rounded-full"></div>
                <div className="bg-yellow-500/10 p-2 rounded-lg ml-3">
                  <FaCheckCircle className="w-6 h-6 text-yellow-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">Aumente sua renda com segurança</h3>
                  <p className="text-slate-300 text-sm">
                    Estratégias comprovadas para investir sem riscos desnecessários
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 relative">
                <div className="absolute left-0 top-0 w-0.5 h-full bg-yellow-500 rounded-full"></div>
                <div className="bg-yellow-500/10 p-2 rounded-lg ml-3">
                  <FaUserSecret className="w-6 h-6 text-yellow-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">Comece do zero sem experiência</h3>
                  <p className="text-slate-300 text-sm">Passo a passo simples, mesmo para iniciantes completos</p>
                </div>
              </div>

              <div className="flex items-start gap-4 relative">
                <div className="absolute left-0 top-0 w-0.5 h-full bg-yellow-500 rounded-full"></div>
                <div className="bg-yellow-500/10 p-2 rounded-lg ml-3">
                  <FaShield className="w-6 h-6 text-yellow-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">Método validado</h3>
                  <p className="text-slate-300 text-sm">Testado e aprovado por mais de 1.200 alunos</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Testimonials */}
        <div className="mb-12 pt-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">O que dizem nossos alunos:</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-0 shadow-lg bg-white/5 backdrop-blur-sm border border-white/10">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br overflow-clip from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold">
                    <Image src='/b-7.jpg' alt="Logo Image" className="logo max-w-16 brightness-0 dark:filter-none" width={100} height={50} />
                  </div>
                  <div>
                    <p className="text-slate-200 mb-3 italic">
                      &quot; Em uma semana já recuperei meu investimento. O método é realmente eficaz!  &quot;
                    </p>
                    <p className="text-sm font-semibold text-white">João Silva, RJ</p>
                    <div className="flex text-yellow-400 mt-1">{"★".repeat(5)}</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/5 backdrop-blur-sm border border-white/10">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br overflow-clip from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold">
                    <Image src='/image9.jpg' alt="Logo Image" className="logo max-w-16 brightness-0 dark:filter-none" width={100} height={50} />
                  </div>
                  <div>
                    <p className="text-slate-200 mb-3 italic">
                      &quot; Nunca imaginei que fosse tão simples começar! Recomendo para todos. &quot;
                    </p>
                    <p className="text-sm font-semibold text-white">Carla Santos, SP</p>
                    <div className="flex text-yellow-400 mt-1">{"★".repeat(5)}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Urgency Section */}
        <div className="bg-gradient-to-r from-red-500 to-red-600 text-white p-6 rounded-2xl text-center mb-8 shadow-lg">
          <div className="flex items-center justify-center gap-2 mb-2">
            <FaClock className="w-6 h-6 animate-pulse" />
            <span className="text-xl font-bold">OFERTA POR TEMPO LIMITADO!</span>
          </div>
          <p className="text-lg">Restam poucas vagas com desconto especial</p>

          {/* Countdown Timer Placeholder */}
          <div className="flex justify-center gap-4 mt-4">
            <div className="bg-white/20 px-3 py-2 rounded-lg">
              <div className="text-2xl font-bold">12</div>
              <div className="text-xs">HORAS</div>
            </div>
            <div className="bg-white/20 px-3 py-2 rounded-lg">
              <div className="text-2xl font-bold">34</div>
              <div className="text-xs">MIN</div>
            </div>
            <div className="bg-white/20 px-3 py-2 rounded-lg">
              <div className="text-2xl font-bold">56</div>
              <div className="text-xs">SEG</div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mb-12">
          <Link href={"https://pay.kiwify.com.br/VcRA5uz"}
            className="w-full block bg-yellow-600 hover:bg-yellow-700 text-white p-6 md:p-2 uppercase text-md md:text-xl font-bold rounded-md shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer">
            🚀 Quero Começar Agora
          </Link>
        </div>

        {/* Footer/Guarantee */}
        <Card className="border-yellow-500/20 bg-yellow-500/5 backdrop-blur-sm border border-white/10">
          <CardContent className="p-6 text-center">
            <div className="flex items-center justify-center gap-2 mb-3">
              <FaShield className="w-6 h-6 text-yellow-600" />
              <span className="font-semibold text-yellow-600">Compra 100% Segura</span>
            </div>
            <p className="text-slate-300 mb-2">
              <strong>Garantia de 7 dias</strong> - Se não ficar satisfeito, devolvemos seu dinheiro
            </p>
            <p className="text-sm text-slate-400">
              Após a compra, o acesso é enviado por e-mail e WhatsApp instantaneamente
            </p>
          </CardContent>
        </Card>


        <div className="text-center m-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">Gostou do que viu até aqui?</h2>
          <p className="pb-4 mb-4">Na StartCrypto, você encontra muito mais conteúdo, dicas e ferramentas para dar seus primeiros passos com segurança no mundo das criptomoedas.
           <br/><br/>  Clique abaixo e continue sua jornada direto pelo nosso site.</p>
          <Link href={"http://startscrypto.com.br/"}
            className="w-1/2 m-auto block bg-yellow-600 hover:bg-yellow-700 text-white p-6 md:p-2 uppercase text-md md:text-xl font-bold rounded-md shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer">
            Saiba mais
          </Link>
        </div>
      </div>
    </div>
  )
}
