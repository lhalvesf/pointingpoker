
import type { FC } from 'react'
import { useState } from 'react'
import { Link } from "react-router"
import './home.css'

export const Home: FC = () => {
  const [isModalOpen, setModalOpen] = useState(false)
  return (
    <>
        <section>
            <div>
              <h1>Pointing Poker</h1>
              <h2>Clique em criar sala e compartilhe o ID da sala com seus colegas</h2>
            </div>
            { isModalOpen ? 'modal open' : 'modal closed'}
            <Link className="link-button" to="" onClick={() => setModalOpen(!isModalOpen)}>Criar Sala</Link>
        </section>
    </>
  )
}