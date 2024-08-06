import { useState } from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

function Card({id,image,description,title}){

  const[likedCourse,setLikedCourse] = useState([]);
  function clickHandler(){
    if(likedCourse.includes(id)){
      setLikedCourse((prev)=>prev.filter((cid)=>(cid!==id)))
      toast.warn("like remove");
    }else{
      if(likedCourse.length === 0){
        setLikedCourse([id]);
      }else{
        setLikedCourse((prev)=>[...prev,id])
      }
      toast.success("like added")
    }
  }


    return(
      <div className="w-[300px] relative rounded-md overflow-hidden bg-bgDark">
        <div >
          <img src={image.url} alt={image.alt}/>
        </div>
        <div onClick={clickHandler} className=" absolute right-2 top-36 grid place-items-center h-10 w-10 bg-white rounded-full">
          {
            likedCourse.includes(id)?<FcLike fontSize={'1.75rem'}/>:<FcLikePlaceholder fontSize={'1.75rem'} />
          }
        </div>
        <div className=" p-4">
          <p className=" text-white text-lg font-semibold leading-6">{title}</p>
          <p className="text-white">{description}</p>
        </div>
      </div>
    );
  };
  
  
  export default Card