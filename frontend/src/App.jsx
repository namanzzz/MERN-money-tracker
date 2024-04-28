import React from 'react'

function App() {
  return (
    <main>
      <h1>RS 400<span>.00</span></h1>
      <form>

        <div className='basic'>
            <input type="text" placeholder='+20000 new samsung tv'/>
            <input type="datetime-local" />
        </div>

        <div className='description'>
            <input type="text" placeholder='description'/>
        </div>
        
        <button>Add new transaction</button>
      </form>

      <div className='transactions'>
        <div className='transaction'>
          <div className="left">
            <div className="name">Iphone</div>
            <div className='description'>It was time for an Iphone</div>
          </div>

          <div className="right">
            <div className="price red"> - RS 80,000</div>
            <div className="datetime">2024-4-23 16:30</div>
          </div>
        </div>

        <div className='transaction'>
          <div className="left">
            <div className="name">New samsung TV</div>
            <div className='description'>It was time for new TV</div>
          </div>

          <div className="right">
            <div className="price red"> - RS 20,000</div>
            <div className="datetime">2024-2-23 16:30</div>
          </div>
        </div>

        <div className='transaction'>
          <div className="left">
            <div className="name">Website development</div>
            <div className='description'>Developed a new website for a local business</div>
          </div>

          <div className="right">
            <div className="price green"> + RS 60,000</div>
            <div className="datetime">2024-2-23 16:30</div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default App