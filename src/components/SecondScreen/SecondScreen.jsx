import pdf from '../icons/pdf.svg'
import SecondScreenTile from './SecondScreenTile'
import camera from "../icons/camera.svg"
import upload from "../icons/upload.svg"

export const SecondScreen = () => {
    return (
        <div>
            <div className=" font-bold mx-6 text-2xl text-center text-[#133039] capitalize">
                Provide Memorandum of Association
            </div>
            <div className='flex justify-center items-center my-8'>
                <img src={pdf} alt="pdf" />
            </div>
            <div>
                <SecondScreenTile icon={camera} text="Take a photo"/>
                <SecondScreenTile icon={upload} text="upload"/>
            </div>
        </div>
    )
}
