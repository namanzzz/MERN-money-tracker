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
    </main>
  )
}

export default App