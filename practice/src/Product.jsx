import React,{useState} from 'react'

function Product({age}) {
    const [a, b] = useState(false)
  return (
    <div className='w-full'>
        <h4 className={`${a===false ? "text-red-600" : "text-blue-600"}`}>Hello</h4>     
        <button onClick={()=>b(!a)}>change</button>
    </div>
  )
}

export default Product
