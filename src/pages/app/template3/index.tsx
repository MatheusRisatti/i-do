import { Couple } from '@/@types/couple'

import { About } from './components/about'
import { Confirm } from './components/confirm'
import { Footer } from './components/footer'
import { Gift } from './components/gift'
import { Home } from './components/home'
import { Location } from './components/location'
import { Message } from './components/message'
import { UpButton } from './components/up-button'

interface Template1Props {
  couple: Couple
}

export function Template3({ couple }: Template1Props) {
  console.log(couple)

  return (
    <>
      <div className="bg-amber-50">
        <Home couple={couple} />
        <About couple={couple} />
        <Gift gifts={couple.gifts} />
        <UpButton />
        <Message />
        <Confirm />
        <Location />
        <Footer />
      </div>
    </>
  )
}
