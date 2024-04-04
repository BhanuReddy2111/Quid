import { useParams } from "react-router-dom"

const UseParamsImplementation = () => {
    const {userId}=useParams();
    return (
        <>
            <div>
                <div className=" font-semibold bg-gray-500 p-2 rounded-2xl text-cyan-200">UseParams Implementation</div>

                <h2 className="font-semibold bg-slate-400 text-yellow-200 p-2 rounded-lg my-2">Quid Employee Directory</h2>

                <p className="font-semibold bg-cyan-100 text-grey-300 p-4 py-8 my-1 rounded-md">Show Quid Employee {userId} Details </p>

            </div>
        </>
    )
}

export default UseParamsImplementation