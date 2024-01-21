import React, {useState} from 'react'
import Product from './Product'

function App() {
  var [a,b] = useState(7)
  return (
    <div className='w-screen h-screen bg-zinc-900 p-4'>
      <div className='w-44 h-32 rounded-xl p-3 text-white '>
        <h3>{a}</h3>
        <button onClick={()=>b(a+1)} className='px-6 py-3 mt-3 bg-green-400 rounded'>Click</button>
      </div>
      <Product />
    </div>
  )
}

export default App
