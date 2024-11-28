import { Couple } from '@/@types/couple'
import { useRef } from 'react'

interface TemplateProps {
  couple: Couple
}

<<<<<<< HEAD
export function Template2({ couple }: TemplateProps) {
  return (
    <>
      {/* <pre>{JSON.stringify(couple, null, 2)}</pre> */}
      <h1>
        {couple.wife.name} & {couple.husband.name}
      </h1>
      {/* <img src={couple.images[0]} alt="" /> */}
      {couple.images.map((img) => (
        <img key={img} src={img} alt="" />
      ))}

      <section id="gifts">
        <div>
          <img src="" alt="" />
          <h2>Lista de presentes</h2>
          <img src="" alt="" />
        </div>
        <p>{couple.gift_intro}</p>
        <div id="gifts-list">
          {couple.gifts.map((item) => (
            <div key={item.id}>
              <img src={item.image} alt="" />
              <h3>{item.title}</h3>
              <p>{item.price}</p>
              <a href={item.url} target="_blank" rel="noreferrer">
                Comprar
              </a>
            </div>
          ))}
        </div>
      </section>

      <section id="ceremony">
        <h2>Cerimonia</h2>
        <p>{couple.ceremony_intro}</p>
        <img src={couple.ceremony_img} alt="" />
        <iframe
          src={couple.ceremony_loc}
          width="1000"
          height="450"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>

      <section id="party">
        <h2>Festa</h2>
        <p>{couple.event_intro}</p>
        <img src={couple.event_img} alt="" />
        <iframe
          src={couple.event_loc}
          width="1000"
          height="450"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </>
=======
export function Template2({ couple }: Template2Props) {
  const ref = useRef(null)


  function handleScroll() {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smoothf' })
    }
      }

  return (
    <div>
      <h1>Template 2</h1>
      <h2>{couple.slug}</h2>
      <iframe
        src={couple.locationMap}
        width="600"
        height="450"
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"></iframe>
        <section ref={ref}>
          <h2>Lista de Presentes</h2>
          <ul>
            {couple.presents.map((present) => (
              <li key={present.id}>
                <h3>{present.name}</h3>
                <p>{present.description}</p>
                <p>{present.price}</p>
              </li>
            ))}
          </ul>
        </section>
    </div>
>>>>>>> 9fb0a41c293d158356a29241a4b93801814a01b6
  )
}
