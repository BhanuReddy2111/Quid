import { useState } from "react"


const UseStateImplement = () => {
    const [count,setCount]=useState(0);


  return (
    <div>
        <h3 className=" font-semibold bg-gray-500 p-2 rounded-2xl text-cyan-200">UseState Implementation</h3>
        <p className=" font-semibold text-gray-500">Here we will understand working of useState with increment and decrement and showing the number is odd or even</p>
        <h4 className="my-3">The count is - {count}</h4>
        <h4 className="my-2">The Number is -{count%2!==0?<>Odd</>:<>Even</>}</h4>


        <div className=" bg-blue-400 p-2 rounded-lg my-1" >
        <button onClick={()=>setCount(count+1)}>Increment</button>
        </div>
        <div className=" bg-red-400 p-2 rounded-lg my-1" >
        <button onClick={()=>setCount(count-1)}>Decrement</button>
        </div>

    </div>
  )
}

export default UseStateImplement