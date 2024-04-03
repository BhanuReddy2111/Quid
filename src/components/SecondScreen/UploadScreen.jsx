import pdf from '../icons/pdf.svg'
import UploadScreenTile from './UploadScreenTile'
import camera from "../icons/camera.svg"
import upload from "../icons/upload.svg"

export const UploadScreen = () => {
    return (
        <div>
            <div className=" font-bold mx-6 text-2xl text-center text-[#133039] capitalize">
                Provide Memorandum of Association
            </div>
            <div className='flex justify-center items-center my-8'>
                <img src={pdf} alt="pdf" />
            </div>
            <div>
                <UploadScreenTile icon={camera} text="Take a photo"/>
                <UploadScreenTile icon={upload} text="Upload"/>
            </div>
        </div>
    )
}
