/* eslint-disable react/prop-types */


const SecondScreenTile = (props) => {
  return (
    <div className="flex border-2 rounded-2xl items-center p-4 mb-4">
        <div>
            <img src={props.icon} alt="Image Icon" />
        </div>
        <div className="text-[#133039] text-base ml-4 font-semibold">
          {props.text}
        </div>
    </div>
  )
}

export default SecondScreenTile