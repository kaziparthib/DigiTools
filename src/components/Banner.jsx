import PlayImg from'../assets/play.png'
import BannerImg from'../assets/banner.png'

const Banner=()=>{
  return(
    <>
    
    <div className=''>



      <div className=' max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-center'>

      <div className='space-y-2'>
        <div className='flex justify-center items-center gap-2 w-[300px] rounded-full bg-purple-400'>
          <div className='bg-purple-700 rounded-full w-[8px] h-2'></div>
          <p className='bg-gradient-to-b from-[#4f39f6] to-[#9514fa] bg-clip-text text-transparent'>AI-Powered Tools Avaiable</p>
        </div>
        <div>
          <h1 className='text-5xl font-bold mb-2'>Supercharge Your Digital Workflow</h1>
          <p>Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.Explore Products</p>
        
        </div>
        <div className='flex gap-4'>
          <button className='btn b rounded-full bg-[linear-gradient(to_bottom,_rgba(79,57,246,1)_0%,_rgba(149,20,250,1)_100%)] text-white'>Explore Products</button>
          <div className='flex gap-2.5 btn bg-white rounded-full'>
            <div><img src={PlayImg} alt="" /></div>
            <button className='bg-gradient-to-b from-[#4f39f6] to-[#9514fa] bg-clip-text text-transparent'>Watch demo</button>
          </div>
        </div>
      </div>

       <div>
        <img src={BannerImg} alt="" />
       </div>
        
      </div>




    </div>
    
    
    
    </>
  )
}
export default Banner