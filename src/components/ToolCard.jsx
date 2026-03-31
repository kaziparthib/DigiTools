import { useState } from "react";
import { toast } from "react-toastify";

const ToolCard=({tool,Carts,setCarts})=>{
  const [BuyNow,setBuyNow]=useState(false)
  const handleBuy=()=>{
  setBuyNow(true)
const found=Carts.find(f=>f.id===tool.id)
if(found){
  toast.error("Already Added")
  return;
}

  setCarts([...Carts,tool])
  toast.success("Added to cart!")
  }
  return(
   <div className="shadow-md w-100 mx-auto rounded-lg p-6">
      
        <div>
         <img src={tool.icon} alt="" />
        </div>
        <div>
          <h3 className="font-bold">{tool.name}</h3>
      <p className="text-gray-700">{tool.description}</p>
      <p className="my-2.5 font-bold">${tool.price}/{tool.period}</p>
        </div>
      <div>
        <ul>
          <li className="text-gray-700">{tool.features[0]}</li>
          <li className="text-gray-700">{tool.features[1]}</li>
          <li className="text-gray-700">{tool.features[2]}</li>
        </ul>
      </div>
     <button onClick={handleBuy}  className="btn rounded-full w-full mt-2 bg-red-600 text-white">{BuyNow?"Added To Cart":"Buy Now"}</button>
      
    </div>

  )
}

export default ToolCard;