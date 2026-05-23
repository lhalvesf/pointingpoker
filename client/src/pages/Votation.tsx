import './votation.css' 

export function Votation() {
  return (
    <>
      <section>
        <div id="desk-wrapper">
          {/* <h1 id="test">Scrum Poker</h1> */}

          <div>vote results</div>
          <div>average ~</div>
          
          {/* OPÇÃO 1: Itens ao redor do retângulo (Circular) */}
          {/* <div id="desk" className="layout-circular">
            <div className="desk-item">1</div>
            <div className="desk-item">2</div>
            <div className="desk-item">3</div>
            <div className="desk-item">4</div>
            <div className="desk-item">5</div>
            <div className="desk-item">6</div>
            <div className="desk-item">7</div>
            <div className="desk-item">8</div>
            <div className="desk-item">9</div>
            <div className="desk-item">10</div>
            <div className="desk-item">11</div>
            <div className="desk-item">12</div>
          </div> */}

          {/* OPÇÃO 2: Grid dentro do retângulo (Descomente para usar)
          <div id="desk" className="layout-grid">
            <div className="desk-item">1</div>
            <div className="desk-item">2</div>
            <div className="desk-item">3</div>
            <div className="desk-item">4</div>
            <div className="desk-item">5</div>
            <div className="desk-item">6</div>
            <div className="desk-item">7</div>
            <div className="desk-item">8</div>
          </div>
          */}

          {/* OPÇÃO 3: Flexbox dentro do retângulo (Descomente para usar)
          <div id="desk" className="layout-flex">
            <div className="desk-item">1</div>
            <div className="desk-item">2</div>
            <div className="desk-item">3</div>
            <div className="desk-item">4</div>
            <div className="desk-item">5</div>
            <div className="desk-item">6</div>
            <div className="desk-item">7</div>
          </div>
          */}

        </div>
        <div id="vote-wrapper">
          {/* <h1>Vote Board</h1> */}

          <div id="point-card-wrapper">
            <div className='point-card'>
              <img src="/images/cards/0.webp" alt="" />
            </div>
            <div className='point-card'>
              <img src="/images/cards/1.webp" alt="" />
            </div>
            <div className='point-card'>
              <img src="/images/cards/2.webp" alt="" />
            </div>
            <div className='point-card'>
              <img src="/images/cards/3.webp" alt="" />
            </div>
            <div className='point-card'>
              <img src="/images/cards/5.webp" alt="" />
            </div>
            <div className='point-card'>
              <img src="/images/cards/8.webp" alt="" />
            </div>
            <div className='point-card'>
              <img src="/images/cards/13.webp" alt="" />
            </div>
            <div className='point-card'>
              <img src="/images/cards/20.webp" alt="" />
            </div>
            <div className='point-card'>
              <img src="/images/cards/21.webp" alt="" />
            </div>
            <div className='point-card'>
              <img src="/images/cards/40.webp" alt="" />
            </div>
            <div className='point-card'>
              <img src="/images/cards/100.webp" alt="" />
            </div>
            <div className='point-card'>
              <img src="/images/cards/infinite.webp" alt="" />
            </div>
            <div className='point-card'>
              <img src="/images/cards/interrogation.webp" alt="" />
            </div>
          </div>
          
        </div>
      </section>
    </>
  )
} 