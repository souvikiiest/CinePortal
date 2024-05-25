/* eslint-disable react/prop-types */
import star from "../assets/star.svg";

export default function Star({rating}){
    const stars = Array(rating).fill(star);
    return (
        <>
        {stars.map((t,index)=>{
        return  <img key={index} src={t} width="14" height="14" alt="" />
       })}
       </>
    )
}