import { use } from "react";
import ToolCard from "./ToolCard";

const Tools=({toolsPromise,Carts,setCarts})=>{
  const tools=use(toolsPromise)
  
  return(
 <div className="max-w-7xl py-20 mx-auto">
  
   <div className="grid md:grid-cols-3 gap-4 mt-1 ">
    {tools.map(tool=>
    <ToolCard key={tool.id} tool={tool}  Carts={Carts} setCarts={setCarts}></ToolCard>
   )}

   </div>

 </div>
  
  );
};
export default Tools;