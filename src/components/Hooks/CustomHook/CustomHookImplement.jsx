import { useState } from "react"
import useQuidEmployeeDocTitle from "./useQuidEmployeeDocTitle";

const CustomHookImplement = () => {
  const [count, setCount] = useState(0);

  // useEffect(() => {
  //   document.title = `${count} Quid Employees`;
  // }, [count])

  // if i need to use the same above logic for so many componnets then code redundancy will come so we will try to create a custom hook
  useQuidEmployeeDocTitle(count); //Used custom hook

  
  return (
    <>
      <div className=" font-semibold bg-gray-500 p-2 rounded-2xl text-cyan-200">CustomHookImplement</div>
      <h2 className=" font-sans font-semibold text-blue-400 my-2">Increment Quid Employees</h2>

      <div className=" bg-purple-200 text-black p-2 rounded-lg my-1 font-semibold">
        <button onClick={() => setCount(count + 1)}>Increase {count}</button>
      </div>
    </>
  )
}

export default CustomHookImplement