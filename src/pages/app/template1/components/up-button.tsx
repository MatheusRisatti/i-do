// import { ArrowUp } from 'lucide-react'

import { useState } from 'react'
import { useNavigate } from 'react-router'

export function UpButton() {
  function ScrollButton() {
    const navigate = useNavigate()

    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop
      if (scrolled > 300) {
        setVisible(true)
      } else if (scrolled <= 300) {
        setVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisible)

    return (
      <>
        <button onClick={() => navigate('/')}>Hello</button>
      </>
    )
  }
}
