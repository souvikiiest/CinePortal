/* eslint-disable react/prop-types */

import { useContext, useState } from "react";
import { toast } from "react-toastify";
import Tag from "../assets/tag.svg";
import { MovieContext } from "../context";
import { GetURL } from "../utils/GetImageUrl";
import MovieDetails from "./MovieDetails";
import Popup from "./Popup";
import Star from "./Star";


export default function MovieCard({movie}){
    const [showDetails, setshowDetails] = useState(false);
    const {cartValue,setcartValue} = useContext(MovieContext);
    const [popup,setPopup] = useState({visible:false,message:""})

    const handleImageClick= ()=>{
         setshowDetails(!showDetails);
    }
    const handleAddItems = (movie)=>{
      const found = cartValue.find(value=>value.id === movie.id);
      if(!found){
      setcartValue([
        ...cartValue,
        movie
      ]);
      toast.success(`Movie ADDED successfully`,{
        position:toast.POSITION.BOTTOM_RIGHT
      })
    }
    else{
      setPopup({visible:true,message:"You have already added this to cart"})
    }
    }
    const closePopup= ()=>{
      setPopup({visible:false,message:""});
    }
    return (
        <>
       {showDetails ? <MovieDetails movie={movie} handleCancel={()=>setshowDetails(false)}/> : <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
        <img
          onClick={handleImageClick}
          className="w-full object-cover "
          src={GetURL(movie.cover)}
          alt=""
        />
        <figcaption className="pt-4">
          <h3 className="text-xl mb-1">{movie.title}</h3>
          <p className="text-[#575A6E] text-sm mb-2">{movie.genre} </p>
          <div className="flex items-center space-x-1 mb-5">
            <Star rating={movie.rating} />
          </div>

          <a
            className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
            href="#"
            onClick={()=>handleAddItems(movie)}
          >
            <img src={Tag} alt="" />
            <span className="text-white">${movie.price} | Add to Cart</span>
          </a>
        </figcaption>
      </figure>} 
      {popup.visible && <Popup popup={popup} closePopup={closePopup}/>}
      
      </>
    );
}