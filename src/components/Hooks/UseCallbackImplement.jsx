/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import { memo, useCallback, useState } from "react"

const UseCallbackImplement = () => {
    const [count,setCount]=useState(0);

    // const handleClick=()=>{
    //     setCount(count+1);
    // }

    // so by using useCallback we can improve the performance and decrease the unneccary renders

    const handleClick=useCallback(()=>{
        setCount(count+1);
    },[count]);

  return (
    <div>
        <h3 className=" font-semibold bg-gray-500 p-2 rounded-2xl text-cyan-200">UseCallback &Memo Implementation</h3>
        <h4 className="my-3">The count is - {count}</h4>
        
        
        <ChildComponent onClick={handleClick}/>

    </div>
  )
}

function ChildComponent(props){
    console.log("Child componnet renders");

    return (
        <div>
            <ChildComponent2/>
            <button className=" bg-blue-400 p-2 rounded-lg my-1" onClick={props.onClick}>Increment count</button>
        </div>
    )
}


const ChildComponent2 = memo(() => {
    console.log("Child Component 2 renders.........");
    return (
        <h1>Hey Hai Welcome to call back explanation</h1>
    );
});

// if we use memo to child component then we dont get unneceesary renderings for the CC2

export default UseCallbackImplement