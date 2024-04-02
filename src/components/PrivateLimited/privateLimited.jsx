
import Tile from "./components/Tile"
import PdfIcon from "../icons/Pdf"
import MoAIcon from "../icons/MoA"
import CertificateIcon from "../icons/Certificate"
import PanIcon from "../icons/Pan"


const Items=[
    {
        img:<MoAIcon/>,
        title:"Memorandum of Association",
        caption:"Scan/Upload Memorandum of Association",
    },
    {
        img:<PdfIcon/>,
        title:"Articles of Association",
        caption:"Scan/Upload Articles of Association",
    },
    {
        img:<CertificateIcon/>,
        title:"Certificate of Incorporation",
        caption:"Scan/Upload Certificate of Incorporation",
    },
    {
        img:<PdfIcon/>,
        title:"Board Resolution",
        caption:"Scan/Upload Board Resolution",
    },
    {
        img:<PanIcon/>,
        title:"Company's PAN ",
        caption:"Scan/Upload Board Resolution",
    },
];

const PrivateLimited = () => {
    return (
        <div className="">
            <div className=" font-semibold mx-20 text-lg text-center text-[#133039] capitalize">You identify as Private Limited
            </div>
            <p className=" font-semibold text-[#66787E] text-center text-xs my-3">Kindly provide the following additional documents for your Private Limited to verify.</p>
            <div>
                {
                    Items.map((item,index)=><Tile key={index} img={item.img} title={item.title} caption={item.caption}/>)
                    // Changed this to map arrow function 
                }
            </div>
        </div>
    )
}

export default PrivateLimited



