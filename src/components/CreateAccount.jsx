import userImg from'../assets/user.png'
import rocketImg from'../assets/rocket.png'
import packageImg from'../assets/package.png'


const Acc = () => {
  return (
    <>
    <div className="bg-[#f9fafcFF] pt-3.5 pb-6">
    <div className="text-center">
      <h1 className="text-2xl font-bold mb-2.5">Get Started In 3 Steps</h1>
      <p>Start using premium digital tools in minutes,no hours</p>
    </div>
    



    <div className=' max-w-7xl mx-auto px-22 grid grid-cols-1 md:grid-cols-3 gap-2 pt-3'>
      <div className='shadow-md space-y-2 w-75'>
        <div className='bg-[linear-gradient(to_bottom,_rgba(79,57,246,1)_0%,_rgba(149,20,250,1)_100%)] rounded-full text-white flex justify-center items-center h-[40px] w-[40px]'><p>01</p></div>
        <div className='text-center space-y-2'>
          <div className='flex justify-center'><img src={userImg} className='' alt="" /></div> 
          <h3 className='font-semibold'>Create Account</h3>
          <p>Sign up for free in seconds. No credit card required to get started.</p>
        </div>
      </div>

      <div className='shadow-md w-75'>

          <div className='bg-[linear-gradient(to_bottom,_rgba(79,57,246,1)_0%,_rgba(149,20,250,1)_100%)] rounded-full text-white flex justify-center items-center h-[40px] w-[40px]'><p>02</p></div>
        <div className='text-center'>
         <div className='flex justify-center'><img src={packageImg} alt="" /></div> 
          <h3 className='font-semibold'>Choose products</h3>
          <p>Browse our catalog and select the tools
that fit your needs.</p>
        </div>

      </div>
      <div className='shadow-md w-75'>

          <div className='bg-[linear-gradient(to_bottom,_rgba(79,57,246,1)_0%,_rgba(149,20,250,1)_100%)] rounded-full text-white flex justify-center items-center h-[40px] w-[40px]'><p>03</p></div>
        <div className='text-center'>
         <div className='flex justify-center'> <img src={rocketImg} alt="" /></div> 
          <h3 className='font-semibold'>Start creating</h3>
          <p>Download and start using your premium 
tools immediately.</p>
        </div>

      </div>
    </div>

    

    </div>
    
    
    </>
  )
}
export default Acc ;