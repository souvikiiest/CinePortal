import { useContext } from "react";
import { ThemeContext } from "../context";

/* eslint-disable react/prop-types */
export default function Popup({popup,closePopup}){
    const {darkMode} = useContext(ThemeContext);
    return (
        <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center z-50 bg-black/60">
          <div className={`${darkMode?"dark":""}  bg-white p-6 rounded shadow-lg`}>
            <p>{popup.message}</p>
            <button
              className="mt-4 px-4 py-2 bg-primary text-white rounded"
              onClick={closePopup}
            >
              Close
            </button>
          </div>
        </div>
    )
}