
/* eslint-disable react/prop-types */
// import { useDocs } from "../../../contexts/DocumentContext";
import { Link } from "react-router-dom";
import ArrowIcon from "../../icons/Arrow";



const Tile = (props) => {
    // const {docs,setDocs} = useDocs()
    // setDocs((prev)=>({...prev,"MOA":"/fdssdks.jpg"}))

    return (
        <>
        <Link to="/uploadMoA" className="flex  p-4 border-2 rounded-2xl mt-2 items-center" >
            <div className=" flex-none place-self-start">
                {props.img}
            </div>
            <div className="ml-4 flex flex-col items-start flex-1 text-left">
                <div className=" font-semibold text-sm text-[#133039] p-0.5">{props.title}</div>
                <div className=" font-semibold text-xs text-[#95A2A6] p-0.5">{props.caption}</div>
            </div>
                <ArrowIcon className="w-6 h-6 text-gray-500" />
        </Link>
        </>
    );
}

export default Tile;
