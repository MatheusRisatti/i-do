/* eslint-disable jsx-a11y/alt-text */
import logo from '@/assets/img/menuLogo.svg'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

import { MenuSection } from './components/menu-section'

export function Menu() {
  return (
    <>
      <div className="flex min-h-screen w-full flex-col gap-24 bg-amber-50">
        <div className="mt-10 flex w-full items-center justify-center">
          <img className="h-[50vh]" src={logo} />
        </div>
        <div className="flex h-[50%] w-full items-start justify-center gap-24">
          <Popover>
            <PopoverTrigger>
              <MenuSection title="Quem" text="Nós Somos ?" />
            </PopoverTrigger>
            <PopoverContent className="mb-4 w-96 bg-slate-600 text-slate-50 data-[side=top]:slide-in-from-bottom-48">
              <p>
                Nós somos Matheus Risatti, conhecido como Mapoko, e Gustavo
                Buzacarini, conhecido como Zaza, dois desenvolvedores
                apaixonados por criar soluções que tornam momentos especiais
                ainda mais memoráveis. O MarryMe nasceu do nosso desejo de
                oferecer aos casais uma plataforma moderna, intuitiva e
                personalizável para criar seus sites de casamento. Combinando
                tecnologia e criatividade, estamos aqui para ajudar você a
                transformar o planejamento do seu grande dia em uma experiência
                única e especial.
              </p>
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger>
              <MenuSection title="O Que" text="Fazemos ?" />
            </PopoverTrigger>
            <PopoverContent className="mb-4 w-96 bg-slate-600 text-slate-50 data-[side=top]:slide-in-from-bottom-48">
              <p>
                No MarryMe você encontra uma maneira mais simples e de facil
                acesso para compartilhar informações importantes, como detalhes
                da cerimônia, lista de presentes, confirmação de presença e
                muito mais, tudo de forma prática e elegante. Com templates
                variados e diversas opções de escolha, cada casal pode encontrar
                um site que reflita seu estilo e sua história.
              </p>
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger>
              <MenuSection title="Por Que" text="Fazemos ?" />
            </PopoverTrigger>
            <PopoverContent className="mb-4 w-96 bg-slate-600 text-slate-50 data-[side=top]:slide-in-from-bottom-48">
              <p>
                Acreditamos que o amor merece ser celebrado com toda a dedicação
                e cuidado que ele inspira. Desenvolvemos o MarryMe porque
                queremos simplificar o planejamento de casamento e ajudar casais
                a compartilhar sua alegria de forma moderna e marcante. Nossa
                missão é transformar momentos emocionantes em memórias digitais
                que permanecerão para sempre.
              </p>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </>
  )
}
