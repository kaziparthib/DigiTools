import { useState } from "react";
import { toast } from "react-toastify";

const tag = {
  "Best Seller": "bg-[#FEF3C6] text-[#BB4D00]",
  "Popular": "bg-[#E1E7FF] text-[#4F39F6]",
  "New": "bg-[#DBFCE7] text-[#0A883E]",
}

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
      
      <div className={`ml-62 mb-3 px-2 py-1 rounded-full w-[100px] text-center ${tag[tool.tag]}`}><p>{tool.tag}</p></div>
      
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
     <button onClick={handleBuy}  className="btn rounded-full w-full mt-2 bg-[linear-gradient(to_bottom,_rgba(79,57,246,1)_0%,_rgba(149,20,250,1)_100%)] text-white ">{BuyNow?"Added To Cart":"Buy Now"}</button>
      
    </div>

  )
}

export default ToolCard;