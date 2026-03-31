const User=()=>{
  return(
    <>
     <div className=" p-10 flex justify-around bg-[linear-gradient(to_bottom,_rgba(79,57,246,1)_0%,_rgba(149,20,250,1)_100%)]">
      <div className="border-r-amber-50">
        <h1 className="text-4xl font-bold text-white">50K+</h1>
        <p className=" text-white">Active Users</p>
        
      </div>
      
       <div className="h-15 w-0.5 bg-white"></div>
        
      <div>
        <h1 className="text-4xl font-bold text-white">200+</h1>
        <p className=" text-white">Premium Tools</p>
      </div>
        
        <div className="h-15 w-0.5 bg-white"></div>

      <div>
        <h1 className="text-4xl font-bold text-white">4.9</h1>
        <p className=" text-white">Rating</p>
      </div>
     </div>
    </>
  )
}


export default User