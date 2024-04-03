import { useEffect, useState } from "react"

const UseEffectImplement = () => {

    const [count, setCount] = useState(0);
    // const [isVisible,setVisible]=useState(true);

    useEffect(() => {
        console.log("Component is Mounted(I am running only at the time of Component Mounted)");
    }, []);

    useEffect(()=>{
        console.log(`The Count is updated ${count} (I am running at the times of Component updated)`);
    },[count]);

    return (
        <>
            <div className=" font-semibold bg-gray-500 p-2 rounded-2xl text-cyan-200">UseEffectImplement</div>
            <h4 className="my-3">The count is - {count}</h4>

            <div className=" bg-blue-400 p-2 rounded-lg my-1" >
                {/* {isVisible ? <button onClick={() => setCount(count + 1)}>update</button>:<></>} */}
                <button onClick={() => setCount(count + 1)}>update</button>
            </div>

            {/* <div className=" font-semibold bg-gray-700 p-2 rounded-xl mt-5 text-white">
                <button onClick={()=>setVisible(!isVisible)}>{isVisible?<>Disappear</>:<>Make it Appear</>} Upload Button</button>
            </div> */}

        </>

    )
}

export default UseEffectImplement