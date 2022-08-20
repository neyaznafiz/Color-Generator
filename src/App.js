import { useState } from "react"
import Values from "values.js"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SoloColor from "./Components/ SoloColor";



function App() {

  const [color, setColor] = useState("")
  const [error, setError] = useState(false)
  const [ColorList, setColorList] = useState(new Values("#667755").all(10))

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      setError(false);
      let colors = new Values(color).all(10);
      // console.log(colors);
      setColorList(colors);
    } catch (err) {
      setError(true);
      // console.log(err);
    }
  }

  return (
    <div className="bg-[#d1d6cc] h-full pb-10">
      
<div>
      <div className='flex justify-center'>
          <img src="https://i.ibb.co/KzmD7kF/CG-logo.png" alt="" className='h-16' />
        </div>

        <div className='flex justify-around bg-[#94a088]'>
          <div className=' flex items-center'>
        
              <h2 className='uppercase text-3xl pm tracking-widest text-[#b3bbaa]'>
                <span>Color</span> <span>Generator </span>
              </h2>
           

          </div>

          <div className="h-20 flex items-center justify-center">
            <div>
              <form
                className="flex justify-center"
                onSubmit={handleSubmit}
              >
                <input
                  type="text"
                  required
                  value={color}
                  placeholder="TYPE COLOR NAME"
                  onChange={(e) => {
                    setColor(e.target.value);
                  }}
                  id={`${error ? "error" : null}`}
                  className="form-control w-[350px] h-12 mx-2 py-2 px-5 text-xl rounded-full outline-none bg-[#e0e4dd] font-serif font-semibold text-gray-600 uppercase"
                />
                <button type="submit" className="w-28 h-[40px] my-1 text-gray-700 font-semibold rounded-full bg-[#758566] hover:bg-[#667755] transition-all duration-500 -ml-[126px]">
                  SEARCH
                </button>
              </form>
            </div>
          </div>
        </div>

        {!error && (
          <div className="my-10">
            <div className="grid grid-cols-6">
              {ColorList.map((color, index) => {
                return <SoloColor key={index} {...color} index={index} />;
              })}
            </div>
          </div>
        )}
      </div>

      <ToastContainer />
    </div>
  );
}

export default App;
