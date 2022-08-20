import React, { useState, useEffect } from "react"
import { toast } from "react-toastify";
import HexFromRgb from "./Utilities.js "


const SoloColor = ({index, rgb, weight }) => {

  const [alert, setAlert] = useState(false);
  const bcg = rgb.toString()
  // console.log(bcg)
  const Hex = HexFromRgb(...rgb)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false)
    })
    return () => clearTimeout(timeout)
  }, [alert])

  const handleClick = () => {
    setAlert(true)
    navigator.clipboard.writeText(Hex)
  };


  return (
    <div className=" flex items-center justify-center"
      id={`${index > 4 && "color-light"}`}
      onClick={handleClick}
      style={{ backgroundColor: `rgb(${bcg})`, height: "170px" }}
      >
      <div className="text-gray-400">
        <p className="">{weight}%</p>
        <p>{Hex}</p>
        {
        alert && 
        toast.success(<p> copied {Hex} to clipboard </p>)
        }
      </div>
    </div>
  );
};

export default SoloColor;